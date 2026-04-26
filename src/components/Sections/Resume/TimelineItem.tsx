import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="group relative">
      <span className="absolute -left-[25px] top-2 h-2 w-2 rounded-full bg-ink-700 ring-4 ring-ink-950 transition-colors group-hover:bg-brand-400" />
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 shadow-bento transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/30">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <div className="flex flex-wrap items-center gap-x-2 text-sm text-ink-400">
            <span className="font-medium text-ink-200">{location}</span>
            <span className="text-ink-600">•</span>
            <span className="font-mono text-xs">{date}</span>
          </div>
        </div>
        <div className="mt-3 text-sm leading-relaxed text-ink-300">{content}</div>
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
