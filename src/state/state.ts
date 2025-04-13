// src/state/state.js
import { atom } from "recoil";
export const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "subroto", // default value (aka initial value)
});
