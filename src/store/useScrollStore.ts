// store/scrollStore.ts
import { create } from "zustand";

type ScrollStore = {
  sectionRefs: Record<string, HTMLElement | null>;
  setSectionRef: (key: string, ref: HTMLElement | null) => void;
  scrollTo: (key: string) => void;
};

export const useScrollStore = create<ScrollStore>((set, get) => ({
  sectionRefs: {},
  setSectionRef: (key, ref) =>
    set((state) => ({
      sectionRefs: {
        ...state.sectionRefs,
        [key]: ref,
      },
    })),
  scrollTo: (key) => {
    const ref = get().sectionRefs[key];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  },
}));
