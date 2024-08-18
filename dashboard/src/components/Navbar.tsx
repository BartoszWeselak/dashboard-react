import React from "react";
import { twMerge } from "tailwind-merge";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

export function Navbar({ className, children }: NavbarProps) {
  return (
    <div className={twMerge("flex flex-wrap justify-center gap-24", className)}>
      {children}
    </div>
  );
}
