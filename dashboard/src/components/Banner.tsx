import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef, HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Image } from "./Image";

const bannerVariants = cva("", {
  variants: {
    size: {
      small: "w-5/6",
    },
  },
  defaultVariants: { size: "small" },
});

interface BannerProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof bannerVariants> {
  className?: string;
  src: string;
}

export const Banner = forwardRef<HTMLImageElement, BannerProps>(
  ({ src, className, size, ...props }, ref) => {
    return (
      <Image
        src={src}
        ref={ref}
        className={twMerge(bannerVariants({ size }), className)}
        {...props}
      />
    );
  }
);
