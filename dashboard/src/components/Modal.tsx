import React from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ children, isOpen, onClose, ...props }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className={twMerge(
        "fixed inset-0 flex  justify-center bg-black bg-opacity-50 z-50",
        isOpen ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg  w-1/2 m-8" {...props}>
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
