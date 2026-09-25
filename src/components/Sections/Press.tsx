import {ArrowTopRightOnSquareIcon, LockClosedIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {pressItems, SectionId} from '../../data/data';
import {PressItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Press: FC = memo(() => {
  return (
    <Section className="relative bg-ink-950" sectionId={SectionId.Press}>
      <div className="pointer-events-none absolute inset-0 bg-grid-zinc bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_75%)]" />

      <div className="relative flex flex-col gap-y-3 pb-10">
        <span className="inline-flex w-fit items-center gap-x-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-ink-300">
          <span className="h-1 w-1 rounded-full bg-brand-400" />
          Press
        </span>
        <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          In the news<span className="font-display italic text-brand-400">.</span>
        </h2>
        <p className="max-w-xl text-sm text-ink-400">What others wrote about Bürgerwecker and PapaMap.</p>
      </div>

      <ul className="relative flex flex-col gap-3">
        {pressItems.map(item => (
          <PressRow item={item} key={item.url} />
        ))}
      </ul>
    </Section>
  );
});

Press.displayName = 'Press';
export default Press;

const PressRow: FC<{item: PressItem}> = memo(({item}) => {
  const {outlet, date, title, project, url, kind, note, paywall} = item;

  return (
    <li>
      <a
        className="group flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 shadow-bento transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        href={url}
        rel="noreferrer"
        target="_blank">
        <div className="flex min-w-0 flex-col gap-y-2">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-400">
            <span className="font-semibold text-ink-100">{outlet}</span>
            <span aria-hidden="true">·</span>
            <span>{date}</span>
            {kind && (
              <>
                <span aria-hidden="true">·</span>
                <span>{kind}</span>
              </>
            )}
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-ink-300">
              {project}
            </span>
            {paywall && (
              <span className="inline-flex items-center gap-x-1 text-[11px] text-ink-500">
                <LockClosedIcon aria-hidden="true" className="h-3 w-3" />
                Paywall
              </span>
            )}
          </div>
          <p className="text-base font-medium leading-snug text-white transition-colors group-hover:text-brand-400 sm:text-lg">
            {title}
          </p>
          {note && <p className="text-xs leading-relaxed text-ink-500">{note}</p>}
        </div>
        <ArrowTopRightOnSquareIcon
          aria-hidden="true"
          className="mt-1 h-4 w-4 shrink-0 text-ink-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-400"
        />
      </a>
    </li>
  );
});
PressRow.displayName = 'PressRow';
