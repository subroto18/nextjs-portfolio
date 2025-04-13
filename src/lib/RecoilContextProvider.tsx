"use client"; // MUST be first line

import { RecoilRoot } from "recoil";

export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
