import React from "react";
import { twMerge } from "tailwind-merge";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  src?: string;
}

export function Logo({ className, src }: LogoProps) {
  return <img src={src} alt="text" className="w-full h-24" />;
}
