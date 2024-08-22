import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, ...props }, ref) => {
    return <hr className={twMerge("gap-4 m-8", className)} {...props} />;
  }
);
