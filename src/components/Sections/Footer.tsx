import {ChevronUpIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const Footer: FC = memo(() => (
  <footer className="relative border-t border-white/10 bg-ink-950 px-4 pb-10 pt-16 sm:px-8">
    <div className="absolute inset-x-0 -top-5 flex justify-center">
      <a
        aria-label="Back to top"
        className="rounded-full border border-white/10 bg-ink-900 p-2 text-ink-200 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/40 hover:text-brand-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-5 w-5" />
      </a>
    </div>

    <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-y-6 sm:flex-row sm:justify-between">
      <div className="flex flex-col items-center gap-y-1 sm:items-start">
        <span className="font-display text-xl italic text-white">Jakub Waller</span>
        <span className="text-xs text-ink-500">Data &amp; climate · Hamburg, DE</span>
      </div>

      <div className="flex gap-x-2 text-ink-300">
        <Socials />
      </div>

      <span className="text-xs text-ink-500">© {new Date().getFullYear()} Jakub Waller</span>
    </div>
  </footer>
));

Footer.displayName = 'Footer';
export default Footer;
