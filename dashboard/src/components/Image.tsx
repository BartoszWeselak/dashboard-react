import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const imageVariants = cva(
  "mx-auto border content-center rounded-lg shadow-lg ring-2 ring-black/5 ",
  {
    variants: {
      size: {
        xsmall: "w-1/6",
        small: "w-1/4",
        medium: "w-1/2",
        large: "w-full",
      },
    },
    defaultVariants: {
      size: "large",
    },
  }
);

interface imageProps
  extends React.HTMLAttributes<HTMLImageElement>,
    VariantProps<typeof imageVariants> {
  src: string;
  className?: string;
}

export const Image = forwardRef<HTMLImageElement, imageProps>(
  ({ src, className, size, ...props }, ref) => {
    return (
      <img
        ref={ref}
        className={twMerge(className, imageVariants({ size }))}
        src={src}
        alt=""
        {...props}
      />
    );
  }
);
