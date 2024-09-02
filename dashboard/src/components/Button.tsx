import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const buttonVariants = cva("w-full hover:opacity-80", {
  variants: {
    variant: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-white",
      danger: "bg-red-500 text-white",
      tab: "bg-white text-black",
      buy: "bg-green-500 text-white rounded-lg",
    },
    size: {
      small: "px-2 py-1 text-sm",
      medium: "px-4 py-2 text-base",
      large: "px-6 py-3 text-lg",
      xlarge: " py-4 text-lg",
    },
    widths: {
      small: "w-1/6",
      medium: "w-1/4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, widths, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          buttonVariants({ variant, size, widths }),
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
