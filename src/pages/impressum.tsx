import Head from 'next/head';
import Link from 'next/link';
import {FC, memo, PropsWithChildren} from 'react';

const LegalLayout: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => (
  <main className="min-h-screen bg-ink-950 px-4 py-16 text-ink-200 sm:px-8">
    <div className="mx-auto max-w-screen-md">
      <Link className="text-sm text-brand-400 hover:text-brand-300" href="/">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-display text-3xl text-white">{title}</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-300">{children}</div>
    </div>
  </main>
));
LegalLayout.displayName = 'LegalLayout';

const Impressum: FC = memo(() => (
  <>
    <Head>
      <title>Impressum · Jakub Waller</title>
      <meta content="noindex" name="robots" />
    </Head>
    <LegalLayout title="Impressum">
      <section>
        <h2 className="mb-2 font-medium text-ink-100">Angaben gemäß § 5 DDG</h2>
        <p>
          Jakub Waller
          <br />
          {/* TODO: a full postal address (street + number + postcode) is legally required under § 5 DDG — a city alone is not sufficient. Fill in before publishing. */}
          [Straße und Hausnummer]
          <br />
          [PLZ] Hamburg
          <br />
          Deutschland
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-medium text-ink-100">Kontakt</h2>
        <p>
          E-Mail:{' '}
          <a className="text-brand-400 hover:text-brand-300" href="mailto:jakub@jakubwaller.eu">
            jakub@jakubwaller.eu
          </a>
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-medium text-ink-100">Verantwortlich für den Inhalt</h2>
        <p>Jakub Waller (Anschrift wie oben).</p>
      </section>
    </LegalLayout>
  </>
));
Impressum.displayName = 'Impressum';
export default Impressum;
