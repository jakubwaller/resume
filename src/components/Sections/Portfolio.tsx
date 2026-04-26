import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="relative bg-ink-950" sectionId={SectionId.Portfolio}>
      <div className="pointer-events-none absolute inset-0 bg-grid-zinc bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />

      <div className="relative flex flex-col gap-y-3 pb-10">
        <span className="inline-flex w-fit items-center gap-x-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-ink-300">
          <span className="h-1 w-1 rounded-full bg-brand-400" />
          Portfolio
        </span>
        <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Side projects<span className="font-display italic text-brand-400"> &amp; </span>tinkering.
        </h2>
        <p className="max-w-xl text-sm text-ink-400">
          A small collection of bots, tools and weekend builds — mostly Python, mostly on Telegram, mostly for fun.
        </p>
      </div>

      <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <PortfolioCard item={item} key={`${item.title}-${index}`} />
        ))}
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const PortfolioCard: FC<{item: PortfolioItem}> = memo(({item}) => {
  const {url, title, description, image} = item;
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(true);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-bento transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      rel="noreferrer"
      target="_blank">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={image}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
      </div>
      <div className="flex items-start justify-between gap-3 p-4">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-sm font-semibold text-white transition-colors group-hover:text-brand-400">
            {title}
          </h3>
          <p
            className={classNames(
              'text-xs leading-relaxed text-ink-400 transition-all duration-300',
              showOverlay || !mobile ? 'line-clamp-3' : 'line-clamp-2',
            )}>
            {description}
          </p>
        </div>
        <ArrowTopRightOnSquareIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-400" />
      </div>
    </a>
  );
});
PortfolioCard.displayName = 'PortfolioCard';
