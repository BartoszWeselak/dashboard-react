import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src?: string;
}

export const Logo = forwardRef<HTMLImageElement, LogoProps>(
  ({ className, src, ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt="logo"
        className={twMerge("w-5/6 h-24 p-4", className)}
        {...props}
      />
    );
  }
);

Logo.displayName = "Logo";
