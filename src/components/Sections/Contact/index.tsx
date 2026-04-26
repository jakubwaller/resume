import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import Section from '../../Layout/Section';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section className="relative bg-ink-950" sectionId={SectionId.Contact}>
      <div className="pointer-events-none absolute inset-0 bg-mesh-warm opacity-40" />

      <div className="relative mx-auto flex max-w-2xl flex-col gap-y-8">
        <div className="flex flex-col items-center gap-y-3 text-center">
          <span className="inline-flex items-center gap-x-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-ink-300">
            <span className="h-1 w-1 rounded-full bg-brand-400" />
            Get in touch
          </span>
          <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            <span className="font-display italic text-brand-400">{headerText}</span>
          </h2>
          {description && (
            <p className="max-w-md text-sm leading-relaxed text-ink-400">{description}</p>
          )}
          <p className="max-w-md text-sm leading-relaxed text-ink-400">
            Curious about climate-tech, data, or just want to say hi? My inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map(({type, text, href}) => {
            const {Icon, srLabel} = ContactValueMap[type];
            return (
              <a
                className="group flex items-center gap-x-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-4 shadow-bento transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/40"
                href={href}
                key={srLabel}
                rel="noreferrer"
                target="_blank">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ink-200 transition-colors group-hover:border-brand-500/50 group-hover:text-brand-400">
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <div className="flex min-w-0 flex-col">
                  <span className="text-[11px] font-medium uppercase tracking-widest text-ink-500">
                    {srLabel}
                  </span>
                  <span className="truncate text-sm text-ink-100">{text}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
