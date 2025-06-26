import { useState, Fragment, useId, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const ModalUI = ({ title, children, size = "md" }) => {
    const sizeClasses = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-2xl",
      xl: "max-w-4xl",
    };

    return (
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={close}
          aria-labelledby={title ? titleId : undefined}
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <div
              className={`w-full transform rounded-lg bg-white p-6 shadow-xl transition-all ${sizeClasses[size]}`}
            >
              {title && (
                <h2 id={titleId} className="text-lg font-semibold mb-4">
                  {title}
                </h2>
              )}
              {children}
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return { ModalUI, open, close, isOpen };
};
