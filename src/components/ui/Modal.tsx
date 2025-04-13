"use client";

import { Dialog, DialogPanel } from "@headlessui/react";

export default function Modal({
  isOpen,
  setIsOpen,
  children,
}: {
  isOpen?: boolean;
  setIsOpen: () => void;
  children: React.ReactNode;
}) {
  const close = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                ✕
              </button>

              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
