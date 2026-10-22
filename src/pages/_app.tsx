import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {Instrument_Serif, Inter, JetBrains_Mono} from 'next/font/google';
import {memo} from 'react';

// next/font downloads these at build time and serves them from this site, so visitors'
// browsers never contact Google (the Datenschutz page names only Netlify and Cloudflare).
const inter = Inter({subsets: ['latin', 'latin-ext'], weight: ['300', '400', '500', '600', '700', '800']});
const instrumentSerif = Instrument_Serif({subsets: ['latin', 'latin-ext'], weight: '400', style: ['normal', 'italic']});
const jetbrainsMono = JetBrains_Mono({subsets: ['latin', 'latin-ext'], weight: ['400', '500']});

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <style global jsx>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-instrument-serif: ${instrumentSerif.style.fontFamily};
          --font-jetbrains-mono: ${jetbrainsMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
