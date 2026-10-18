import {Head, Html, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="notranslate" name="google" />
        <meta content="#09090b" name="theme-color" />
        {/* Mastodon link verification: the profile lists jakubwaller.eu, this
            is the required backlink. */}
        <link href="https://hostux.social/@aloissiola" rel="me" />
      </Head>
      <body className="bg-ink-950 text-ink-100 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
