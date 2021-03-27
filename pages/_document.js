import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <meta name="keywords" content="photos, images, pictures"/>
          <meta name="description" content="this is a mini version of the unsplash service"/>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument
