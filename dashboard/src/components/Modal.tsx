import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ children, className, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className={twMerge(
        "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",
        isOpen ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg">
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
