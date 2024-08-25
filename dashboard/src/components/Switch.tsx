import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface SwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    return (
      <>
        {" "}
        <p>test</p> <p>qqq</p>
      </>
    );
  }
);
