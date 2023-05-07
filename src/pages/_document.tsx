// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ThemeContextProvider } from "../utils/ThemeContext";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/fonts.css" />
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
