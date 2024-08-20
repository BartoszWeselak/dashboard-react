import React from "react";
import { twMerge } from "tailwind-merge";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  src?: string;
}

export function Logo({ className, src, ...props }: LogoProps) {
  return (
    <img
      src={src}
      alt="text"
      className={twMerge("w-full h-24 p-4", className)}
      {...props}
    />
  );
}
