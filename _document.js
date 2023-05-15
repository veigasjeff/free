import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const { pathname } = this.props;

    let adsScript = null;
    if (pathname === '/some-page') {
      adsScript = (
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4821855388989115"
          crossorigin="anonymous"
        ></script>
      );
    }

    return (
      <Html>
        <Head>
          {adsScript}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
