import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  placeHolder?: string;
  type?: string;
  value?: any;
  onChange?: (e: any) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeHolder, type, value, onChange, ...props }, ref) => {
    return (
      <input
        placeholder={placeHolder}
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        className={twMerge("w-full bg-gray-200", className)}
        {...props}
      />
    );
  }
);
