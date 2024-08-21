import React, { useEffect, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ children, isOpen, onClose, className, ...props }, ref) => {
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }, [onClose]);

    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={twMerge(
          "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",
          isOpen ? "opacity-100" : "opacity-0",
          className
        )}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg" {...props}>
          {children}
          <Button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Close
          </Button>
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";
