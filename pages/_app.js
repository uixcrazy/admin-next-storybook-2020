import App from "next/app";
import Layout from "../app/Layout";

export default class MyApp extends App {
  componentDidMount() {
    const style = document.getElementById("server-side-styles");

    if (style) {
      style.parentNode.removeChild(style);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
