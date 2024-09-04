import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface FormProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Form = forwardRef<HTMLDivElement, FormProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={twMerge("", className)}>
        {children}
      </div>
    );
  }
);
Form.displayName = "Form";
