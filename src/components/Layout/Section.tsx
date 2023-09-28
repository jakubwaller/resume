import classNames from 'classnames';
import {FC, memo, PropsWithChildren, useCallback} from 'react';
import {InView} from 'react-intersection-observer';

import {SectionId} from '../../data/data';
import {useStore} from '../../store';

const Section: FC<
  PropsWithChildren<{sectionId: SectionId; sectionTitle?: string; noPadding?: boolean; className?: string}>
> = memo(({children, sectionId, noPadding = false, className}) => {
  const {setSection} = useStore();

  const handleOnChange = useCallback(
    (visible: boolean, _: IntersectionObserverEntry) => {
      if (visible) {
        setSection(sectionId);
      }
    },
    [sectionId, setSection],
  );

  return (
    <InView onChange={handleOnChange} threshold={0.2}>
      <section className={classNames(className, {'px-4 py-16 md:py-24 lg:px-8': !noPadding})} id={sectionId}>
        <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>{children}</div>
      </section>
    </InView>
  );
});

Section.displayName = 'Section';
export default Section;
