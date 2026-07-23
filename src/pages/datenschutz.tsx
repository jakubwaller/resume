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

const Datenschutz: FC = memo(() => (
  <>
    <Head>
      <title>Datenschutz · Jakub Waller</title>
      <meta content="noindex" name="robots" />
    </Head>
    <LegalLayout title="Datenschutzerklärung">
      <section>
        <h2 className="mb-2 font-medium text-ink-100">Verantwortlicher</h2>
        <p>
          Jakub Waller, Hamburg, Deutschland. Kontakt:{' '}
          <a className="text-brand-400 hover:text-brand-300" href="mailto:jakub@jakubwaller.eu">
            jakub@jakubwaller.eu
          </a>
          . Dies ist eine private Seite; ein Impressum nach § 5 DDG ist nicht erforderlich.
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-medium text-ink-100">Keine Cookies, kein Tracking</h2>
        <p>
          Diese Seite setzt keine Cookies, nutzt keine Analyse- oder Tracking-Dienste und bindet keine
          Drittanbieter-Skripte zu Werbe- oder Statistikzwecken ein.
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-medium text-ink-100">Hosting &amp; Auslieferung</h2>
        <p>
          Die Seite wird bei Netlify (Netlify, Inc., USA) gehostet und über das Content-Delivery-Netzwerk von
          Cloudflare (Cloudflare, Inc., USA) ausgeliefert und abgesichert. Beim Aufruf verarbeiten diese Dienste
          technisch notwendige Server-Logdaten einschließlich deiner IP-Adresse, um die Seite auszuliefern und vor
          Angriffen zu schützen (Art. 6 Abs. 1 lit. f DSGVO — berechtigtes Interesse an einem sicheren, verfügbaren
          Angebot). Beide Anbieter sind unter dem EU-US Data Privacy Framework zertifiziert; es bestehen Verträge zur
          Auftragsverarbeitung.
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-medium text-ink-100">Kontakt</h2>
        <p>
          Diese Seite enthält kein Kontaktformular und keine serverseitige Datenerfassung. Für eine Kontaktaufnahme
          nutze bitte die oben genannte E-Mail-Adresse.
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-medium text-ink-100">Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung
          (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21) sowie ein Beschwerderecht bei einer
          Datenschutz-Aufsichtsbehörde.
        </p>
      </section>
    </LegalLayout>
  </>
));
Datenschutz.displayName = 'Datenschutz';
export default Datenschutz;
