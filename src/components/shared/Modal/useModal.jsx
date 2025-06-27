import { useState, Fragment, useId, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const ModalUI = ({
    title,
    children,
    footer,
    size = "md",
    color = "white",
    hideClose = false,
  }) => {
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
              className={`w-full transform rounded-lg bg-${color} p-6 shadow-xl transition-all ${sizeClasses[size]}`}
            >
              {title && (
                <Dialog.Title
                  id={titleId}
                  className="text-lg font-semibold mb-4"
                >
                  {title}
                </Dialog.Title>
              )}

              <div>{children}</div>

              {footer && <div className="mt-4">{footer}</div>}

              {!hideClose && (
                <div className="mt-4 text-right">
                  <button
                    onClick={close}
                    className="text-sm text-gray-500 hover:underline"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  };

  ModalUI.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    footer: PropTypes.node,
    size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
    color: PropTypes.string,
    hideClose: PropTypes.bool,
  };

  return { ModalUI, open, close, isOpen };
};
