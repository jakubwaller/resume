import Head from 'next/head';
import Link from 'next/link';
import {FC, memo} from 'react';

const NotFound: FC = memo(() => (
  <>
    <Head>
      <title>Page not found · Jakub Waller</title>
      <meta content="noindex" name="robots" />
    </Head>
    <main className="min-h-screen bg-ink-950 px-4 py-16 text-ink-200 sm:px-8">
      <div className="mx-auto max-w-screen-md">
        <Link className="inline-block py-2 text-sm text-brand-400 hover:text-brand-300" href="/">
          ← Back to home
        </Link>
        <h1 className="mt-6 font-display text-3xl text-white">404</h1>
        <p className="mt-8 text-sm text-ink-300">This page could not be found.</p>
      </div>
    </main>
  </>
));
NotFound.displayName = 'NotFound';
export default NotFound;
