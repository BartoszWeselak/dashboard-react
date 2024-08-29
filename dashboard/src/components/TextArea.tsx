import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const textAreaVariants = cva("text-black", {
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
      white: "bg-white",
      gray: "bg-gray-400 text-white",
    },
  },
  defaultVariants: {
    align: "center",
    colors: "white",
  },
});

interface TextAreaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textAreaVariants> {
  children: React.ReactNode;
  className?: string;
}

export const TextArea = forwardRef<HTMLDivElement, TextAreaProps>(
  ({ children, className, size, colors, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(textAreaVariants({ size, colors }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TextArea.displayName = "TextArea";
