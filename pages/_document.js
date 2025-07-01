import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Orbitron:wght@700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#00FFB2" />
        <meta name="description" content="Credentialing Arcade - CPMSM learning game and quiz app" />
      </Head>
      <body className="bg-game-grid">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
