import { create } from "zustand";

type State = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export const useModalStore = create<State>((set) => ({
  isOpen: false,
  setIsOpen: (open) => set({ isOpen: open }),
}));
