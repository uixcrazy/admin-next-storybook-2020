import Document, { Html, Head, Main, NextScript } from 'next/document';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';

export default class JssDocument extends Document {
  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry()
    const generateId = createGenerateId()
    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => (
          <JssProvider registry={registry} generateId={generateId}>
            <App {...props} />
          </JssProvider>
        ),
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ),
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta name="robots" content="index, follow"/>
          <meta httpEquiv="content-language" content="vi"/>
          <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" href="/favicon-suzuki.png" sizes="32x32"/>
          <link rel="icon" type="image/png" href="/favicon-suzuki.png" sizes="16x16"/>
          <meta name="theme-color" content={"#fff"} />
          <link rel="stylesheet" href="/styles/index.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
