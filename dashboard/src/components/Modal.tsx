import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ children, isOpen, onClose, ...props }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className={twMerge(
        "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",
        isOpen ? "opacity-100" : "opacity-0"
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
