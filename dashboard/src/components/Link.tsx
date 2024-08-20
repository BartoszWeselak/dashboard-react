import React from "react";
import { twMerge } from "tailwind-merge";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  className?: string;
  src?: string;
}

export function Link({ children, className, src, ...props }: LinkProps) {
  return (
    <a href={src} className={twMerge("", className)} {...props}>
      {children}
    </a>
  );
}
