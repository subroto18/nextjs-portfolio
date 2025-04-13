import { create } from "zustand";

type state = {
  open: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useMenuStore = create<state>((set) => ({
  open: false,
  setIsOpen: (isOpen) =>
    set(() => ({
      open: isOpen,
    })),
}));
