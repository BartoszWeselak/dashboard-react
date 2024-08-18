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
    <div className={twMerge("bg-slate-400", className)}>
      {children}
      <Button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        <p>Close</p>
      </Button>
    </div>
  );
}
