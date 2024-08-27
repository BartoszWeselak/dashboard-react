import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const dividerVariants = cva("gap-4 m-8 border-t", {
  variants: {
    thickness: {
      thin: "border-t-1",
      medium: "border-t-2",
      thick: "border-t-4",
    },
    colors: {
      gray: "border-gray-300",
      red: "border-red-500",
      blue: "border-blue-500",
    },
    width: {
      full: "w-full",
      main: "w-5/6 mx-auto",
      half: "w-1/2 mx-auto",
      quarter: "w-1/4 mx-auto",
    },
  },
  defaultVariants: {
    thickness: "thin",
    colors: "gray",
    width: "main",
  },
});

interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  className?: string;
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, thickness, colors, width, ...props }, ref) => {
    return (
      <hr
        className={twMerge(
          dividerVariants({ thickness, colors, width }),
          className
        )}
        {...props}
      />
    );
  }
);
