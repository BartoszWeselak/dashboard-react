import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  placeHolder?: string;
  type?: string;
  accept?: string;
  value?: any;
  onChange?: (e: any) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, placeHolder, type, accept, value, onChange, ...props },
    ref
  ) => {
    return (
      <input
        placeholder={placeHolder}
        ref={ref}
        type={type}
        accept={accept}
        value={value}
        onChange={onChange}
        className={twMerge("w-full bg-gray-100 p-2", className)}
        {...props}
      />
    );
  }
);
