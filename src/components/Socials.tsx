import {FC, memo} from 'react';

import {socialLinks} from '../data/data';

const Socials: FC = memo(() => {
  return (
    <>
      {socialLinks.map(({label, Icon, href}) => (
        <a
          aria-label={label}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-ink-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/40 hover:text-brand-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          href={href}
          key={label}
          rel="noreferrer"
          target="_blank">
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </a>
      ))}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
