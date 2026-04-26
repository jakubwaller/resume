import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="grid grid-cols-1 gap-y-6 md:grid-cols-4 md:gap-x-8">
      <div className="col-span-1">
        <div className="sticky top-24 flex flex-col gap-y-2">
          <span className="inline-flex w-fit items-center gap-x-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-ink-300">
            {title}
          </span>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
