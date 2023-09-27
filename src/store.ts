import {create} from 'zustand';
import {devtools} from 'zustand/middleware';

import {SectionId} from './data/data';

interface BearState {
  currentSection: SectionId | null;
  setSection: (section: SectionId | null) => void;
}

export const useBearStore = create<BearState>()(
  devtools(
    set => ({
      currentSection: null,
      setSection: section => set(_ => ({currentSection: section})),
    }),
    {
      name: 'bear-storage',
    },
  ),
);
