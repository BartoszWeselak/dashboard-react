import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";
import { useDisclosure } from "../hooks/use-disclosure";

interface ModalContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ModalContainer = forwardRef<HTMLDivElement, ModalContainerProps>(
  ({ children, isOpen, onClose, ...props }) => {
    if (!isOpen) return null;

    return (
      <div
        className={twMerge(
          "fixed inset-0 flex justify-center bg-black bg-opacity-30 z-50"
        )}
      >
        <div className="bg-white p-6 rounded-lg w-1/2 m-8" {...props}>
          <div className="text-right">
            <Button
              onClick={onClose}
              className="mt-4 px-4 py-2 w-12 bg-red-500 text-white rounded"
            >
              X
            </Button>
          </div>
          <div className="text-center ">{children}</div>
        </div>
      </div>
    );
  }
);
interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  triggerButton?: React.ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ text, children, className, triggerButton, ...props }) => {
    const { close, open, isOpen } = useDisclosure();

    return (
      <div>
        {triggerButton ? (
          React.cloneElement(triggerButton as React.ReactElement<any>, {
            onClick: open,
          })
        ) : (
          <Button
            onClick={open}
            className={twMerge("px-4 py-2 bg-blue-500 text-white rounded")}
          >
            {text}
          </Button>
        )}
        <ModalContainer
          isOpen={isOpen}
          onClose={close}
          className={twMerge("bg-white p-6 rounded-lg w-1/2 m-8", className)}
          {...props}
        >
          {children}
        </ModalContainer>
      </div>
    );
  }
);
