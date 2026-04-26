import {FC, memo} from 'react';

import {certificates, education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="relative bg-ink-950" sectionId={SectionId.Resume}>
      <div className="pointer-events-none absolute inset-0 bg-grid-zinc bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative flex flex-col gap-y-3 pb-10">
        <span className="inline-flex w-fit items-center gap-x-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-ink-300">
          <span className="h-1 w-1 rounded-full bg-brand-400" />
          Resume
        </span>
        <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Career, education<span className="font-display italic text-brand-400"> &amp;</span> craft.
        </h2>
      </div>

      <div className="relative flex flex-col gap-y-12">
        <ResumeSection title="Experience">
          <div className="relative flex flex-col gap-y-6 border-l border-white/10 pl-6">
            {experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Education">
          <div className="relative flex flex-col gap-y-6 border-l border-white/10 pl-6">
            {education.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Skills">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Certificates">
          <div className="flex flex-col gap-y-3">
            {certificates.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
