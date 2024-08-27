import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const displayVariants = cva("text-black", {
  variants: {
    size: {
      small: "w-1/6",
      medium: "w-1/5",
      big: "w-1/4",
    },
    align: {
      right: "text-right",
      left: "text-left",
      center: "text-center",
    },
    colors: {
      none: "bg-inherit",
      white: "bg-white",
      gray: "bg-gray-400 text-white",
    },
  },
});

interface DisplayProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof displayVariants> {
  children: React.ReactNode;
  className?: string;
}

let test = () => {
  return <p className="w-1/6"></p>;
};

export const Display = forwardRef<HTMLDivElement, DisplayProps>(
  ({ children, className, size, colors, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(displayVariants({ size, colors }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Display.displayName = "Display";
