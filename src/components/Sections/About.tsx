import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;

  return (
    <Section className="relative bg-ink-950" sectionId={SectionId.About}>
      <div className="pointer-events-none absolute inset-0 bg-grid-zinc bg-grid opacity-25 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-3">
          <span className="inline-flex w-fit items-center gap-x-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-ink-300">
            <span className="h-1 w-1 rounded-full bg-brand-400" />
            About
          </span>
          <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A short story so far<span className="font-display italic text-brand-400">.</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid auto-rows-auto grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-[auto_auto]">
          {/* Profile picture card */}
          {!!profileImageSrc && (
            <div className="group relative col-span-1 overflow-hidden rounded-3xl shadow-bento md:col-span-2 md:row-span-2">
              <Image
                alt="Jakub Waller"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={profileImageSrc}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent p-5">
                <div className="flex items-center gap-x-2 text-xs text-ink-200">
                  <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
                  Hamburg · DE
                </div>
                <p className="mt-1 font-display text-2xl italic text-white">Jakub Waller</p>
              </div>
            </div>
          )}

          {/* Narrative card */}
          <div className="col-span-1 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 shadow-bento md:col-span-4 md:row-span-1">
            <div className="prose prose-invert prose-sm max-w-none text-ink-300 sm:prose-base prose-a:no-underline">
              {description}
            </div>
          </div>

          {/* Fact items */}
          {aboutItems.map(({label, text, Icon}, idx) => (
            <div
              className="col-span-1 flex flex-col gap-y-2 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-4 shadow-bento transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/30 md:col-span-2"
              key={idx}>
              <div className="flex items-center gap-x-2 text-ink-400">
                {Icon && <Icon className="h-4 w-4" />}
                <span className="text-xs font-medium uppercase tracking-widest">{label}</span>
              </div>
              <span className="text-sm leading-relaxed text-ink-100">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
