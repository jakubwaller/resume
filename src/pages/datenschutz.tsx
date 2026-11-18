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
      <title>Privacy / Datenschutz · Jakub Waller</title>
      <meta content="noindex" name="robots" />
    </Head>
    <LegalLayout title="Privacy Policy / Datenschutzerklärung">
      <h2 className="font-display text-xl text-white">English</h2>
      <section>
        <h2 className="mb-2 font-medium text-ink-100">Controller</h2>
        <p>
          Jakub Waller, Hamburg, Germany. Contact:{' '}
          <a className="text-brand-400 hover:text-brand-300" href="mailto:reachout@jakubwaller.eu">
            reachout@jakubwaller.eu
          </a>
          . This is a private website; no legal notice (Impressum) is required under § 5 DDG.
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-medium text-ink-100">No cookies, no tracking</h2>
        <p>
          This website sets no cookies, uses no analytics or tracking services and embeds no third-party scripts for
          advertising or statistics.
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-medium text-ink-100">Hosting &amp; delivery</h2>
        <p>
          The website is hosted by Netlify (Netlify, Inc., USA) and delivered and protected through the content delivery
          network of Cloudflare (Cloudflare, Inc., USA). When you visit it, these services process technically necessary
          server log data, including your IP address, to deliver the website and protect it against attacks (Art.
          6(1)(f) GDPR — legitimate interest in a secure, available service). Both providers are certified under the
          EU-US Data Privacy Framework; data processing agreements are in place.
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-medium text-ink-100">Contact</h2>
        <p>
          This website has no contact form and no server-side data collection. To get in touch, please use the email
          address above.
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-medium text-ink-100">Your rights</h2>
        <p>
          You have the right of access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing
          (Art. 18), data portability (Art. 20) and objection (Art. 21), as well as the right to lodge a complaint with
          a data protection supervisory authority.
        </p>
      </section>
      <h2 className="border-t border-ink-800 pt-8 font-display text-xl text-white">Deutsch</h2>
      <section>
        <h2 className="mb-2 font-medium text-ink-100">Verantwortlicher</h2>
        <p>
          Jakub Waller, Hamburg, Deutschland. Kontakt:{' '}
          <a className="text-brand-400 hover:text-brand-300" href="mailto:reachout@jakubwaller.eu">
            reachout@jakubwaller.eu
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
          Die Seite wird bei Netlify (Netlify, Inc., USA) gehostet und über das Content-Delivery-Netzwerk von Cloudflare
          (Cloudflare, Inc., USA) ausgeliefert und abgesichert. Beim Aufruf verarbeiten diese Dienste technisch
          notwendige Server-Logdaten einschließlich deiner IP-Adresse, um die Seite auszuliefern und vor Angriffen zu
          schützen (Art. 6 Abs. 1 lit. f DSGVO — berechtigtes Interesse an einem sicheren, verfügbaren Angebot). Beide
          Anbieter sind unter dem EU-US Data Privacy Framework zertifiziert; es bestehen Verträge zur
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
          Du hast das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18),
          Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21) sowie ein Beschwerderecht bei einer
          Datenschutz-Aufsichtsbehörde.
        </p>
      </section>
    </LegalLayout>
  </>
));
Datenschutz.displayName = 'Datenschutz';
export default Datenschutz;
