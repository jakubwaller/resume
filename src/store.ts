import {create} from 'zustand';
import {devtools} from 'zustand/middleware';

import {SectionId} from './data/data';

interface StoreState {
  currentSection: SectionId | null;
  setSection: (section: SectionId | null) => void;
}

export const useStore = create<StoreState>()(
  devtools(
    set => ({
      currentSection: null,
      setSection: section => set(_ => ({currentSection: section})),
    }),
    {
      name: 'app-storage',
    },
  ),
);
