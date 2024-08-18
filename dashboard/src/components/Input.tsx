import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps {
  className?: string;
  placeHolder?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeHolder }, ref) => {
    return (
      <input
        placeholder={placeHolder}
        ref={ref}
        className={twMerge("bg-slate-500", className)}
      />
    );
  }
);
