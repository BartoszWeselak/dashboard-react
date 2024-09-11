import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "./Link";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src?: string;
}

export const Logo = forwardRef<HTMLImageElement, LogoProps>(
  ({ className, src, ...props }, ref) => {
    return (
      <Link src="/">
        <img
          ref={ref}
          src={src}
          alt="logo"
          className={twMerge("w-4/6 h-32 p-4", className)}
          {...props}
        />
      </Link>
    );
  }
);

Logo.displayName = "Logo";
