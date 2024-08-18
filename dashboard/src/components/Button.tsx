import React, { Children } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Button({ className, onClick, children }: ButtonProps) {
  return (
    <button className={twMerge("", className)} onClick={onClick}>
      {children}
    </button>
  );
}
