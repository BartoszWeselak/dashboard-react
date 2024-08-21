import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  className?: string;
  src?: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, src, ...props }, ref) => {
    return (
      <a ref={ref} href={src} className={twMerge("", className)} {...props}>
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";
