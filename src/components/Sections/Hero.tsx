import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <Image
          alt={`${name}-image`}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        {/* gradient + mesh overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink-950/70 via-ink-950/55 to-ink-950" />
        <div className="absolute inset-0 z-[1] bg-mesh-warm opacity-80" />
        <div className="absolute inset-0 z-[1] bg-grid-zinc bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="relative z-10 mx-auto w-full max-w-screen-md px-4 lg:px-0">
          <div className="animate-fade-up flex flex-col items-center gap-y-7 text-center">
            <span className="inline-flex items-center gap-x-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-ink-200 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Decarbonising supply chains @ shipzero
            </span>

            <h1 className="text-balance font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              I&apos;m Jakub
              <span className="font-display italic text-brand-400"> Waller</span>.
            </h1>

            <div className="space-y-4 text-pretty">{description}</div>

            <div className="flex gap-x-4 text-ink-200">
              <Socials />
            </div>

            <div className="flex w-full flex-wrap justify-center gap-3">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'group flex items-center gap-x-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 sm:text-base',
                    primary
                      ? 'bg-brand-500 text-white shadow-glow hover:bg-brand-400 hover:shadow-[0_0_0_1px_rgba(249,115,22,0.5),0_18px_50px_-10px_rgba(249,115,22,0.55)]'
                      : 'border border-white/15 bg-white/5 text-ink-100 backdrop-blur-md hover:bg-white/10',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && (
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5 sm:h-5 sm:w-5" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <a
          aria-label="Scroll to about section"
          className="absolute inset-x-0 bottom-6 z-10 mx-auto flex w-fit items-center gap-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-ink-300 backdrop-blur-md transition-colors hover:text-white"
          href={`/#${SectionId.About}`}>
          <span>Scroll</span>
          <ChevronDownIcon className="h-4 w-4 animate-pulse-soft" />
        </a>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
