import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button className={twMerge("", className)} {...props}>
      {children}
    </button>
  );
}
