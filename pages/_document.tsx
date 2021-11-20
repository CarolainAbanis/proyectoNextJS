import Document, { Html, Head, Main, NextScript } from 'next/document'

/** aqui puedo configurar estilos globales de la aplicacion */
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <script src="https://kit.fontawesome.com/b99bc83142.js" ></script>
        </Head>
        <body style={{backgroundColor: 'red'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument