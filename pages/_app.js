import App from 'next/app';
import { wrapperStoreSaga } from '../core/store-saga/configureStore';
import '../core/styles/index.scss';

const Noop = ({ children }) => children;

class MyApp extends App {
  componentDidMount() {
    const style = document.getElementById('server-side-styles');

    if (style) {
      style.parentNode.removeChild(style);
    }
  }
  render() {
    const { Component, pageProps, router } = this.props;
    const Layout = Component.Layout || Noop;
    const route = router.route && router.route.substr(1);
    return (
      <Layout route={route}>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default wrapperStoreSaga.withRedux(MyApp)
