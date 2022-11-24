import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,500;0,600;0,700;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Genos:wght@400;500;600;700;800;900&family=Lexend+Zetta:wght@100;200;300;400;500;600;700;800;900&family=Lexend:wght@100;200;300;400;500;600;700&display=swap&family=Rubik+Bubbles&display=swap" rel="stylesheet"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Malayalam:wght@200;300&family=Montserrat:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
