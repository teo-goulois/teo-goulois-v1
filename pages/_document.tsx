import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@200;300;400;500;600;700&family=Lexend+Zetta:wght@300;400;500;600;700&family=Lexend:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />  
      </Head>
      <body className="bg-bg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
