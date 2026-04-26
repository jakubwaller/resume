import {Dialog, Transition} from '@headlessui/react';
import {Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';

import {SectionId} from '../../data/data';
import {useStore} from '../../store';

export const headerID = 'headerNav';

const Header: FC = memo(() => {
  const navSections = useMemo(
    () => [SectionId.About, SectionId.Resume, SectionId.Portfolio, SectionId.Contact],
    [],
  );
  const {currentSection} = useStore();

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
    </>
  );
});

const DesktopNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    return (
      <header className="fixed inset-x-0 top-4 z-50 hidden justify-center sm:flex" id={headerID}>
        <nav className="flex items-center gap-x-1 rounded-full border border-white/10 bg-ink-900/70 px-2 py-1.5 shadow-bento backdrop-blur-xl">
          <Link
            className="px-3 py-1.5 text-sm font-semibold tracking-tight text-white transition-colors hover:text-brand-400"
            href={`/#${SectionId.Hero}`}>
            JW<span className="text-brand-400">.</span>
          </Link>
          <span className="h-4 w-px bg-white/10" />
          {navSections.map(section => (
            <DesktopNavItem
              current={section === currentSection}
              key={section}
              section={section}
            />
          ))}
        </nav>
      </header>
    );
  },
);

const DesktopNavItem: FC<{section: string; current: boolean}> = memo(({section, current}) => (
  <Link
    className={classNames(
      'relative rounded-full px-3 py-1.5 text-sm font-medium first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400',
      current ? 'text-white' : 'text-ink-400 hover:text-ink-100',
    )}
    href={`/#${section}`}>
    <span className="relative z-10">{section}</span>
    {current && (
      <span className="absolute inset-0 -z-0 rounded-full bg-white/10" />
    )}
  </Link>
));
DesktopNavItem.displayName = 'DesktopNavItem';

const MobileNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
      setIsOpen(prev => !prev);
    }, []);

    return (
      <>
        <button
          aria-label="Menu Button"
          className="fixed right-3 top-3 z-40 rounded-full border border-white/10 bg-ink-900/80 p-2.5 backdrop-blur-xl ring-offset-ink-950 transition-colors hover:bg-ink-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 sm:hidden"
          onClick={toggleOpen}>
          {isOpen ? (
            <XMarkIcon className="h-5 w-5 text-white" />
          ) : (
            <Bars3BottomRightIcon className="h-5 w-5 text-white" />
          )}
          <span className="sr-only">Open sidebar</span>
        </button>
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-30 sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-ink-950/80 backdrop-blur-md" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0 -translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-2">
              <div className="absolute inset-x-4 top-16 rounded-3xl border border-white/10 bg-ink-900/95 p-3 shadow-bento backdrop-blur-xl">
                <nav className="flex flex-col gap-y-1">
                  {navSections.map(section => {
                    const current = section === currentSection;
                    return (
                      <Link
                        className={classNames(
                          'rounded-2xl px-4 py-3 text-base font-medium first-letter:uppercase transition-colors',
                          current
                            ? 'bg-white/10 text-white'
                            : 'text-ink-300 hover:bg-white/5 hover:text-white',
                        )}
                        href={`/#${section}`}
                        key={section}
                        onClick={toggleOpen}>
                        {section}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
    );
  },
);

Header.displayName = 'Header';
export default Header;
