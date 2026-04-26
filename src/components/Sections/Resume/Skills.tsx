import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 shadow-bento">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-semibold uppercase tracking-widest text-white">{name}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
      </div>
      <div className="flex flex-col gap-y-3">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, level, max = 10} = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-col gap-y-1.5">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-ink-100">{name}</span>
        <span className="font-mono text-[11px] text-ink-500">{percentage}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-amber-300"
          style={{width: `${percentage}%`}}
        />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
