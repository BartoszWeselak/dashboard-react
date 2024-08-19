import React from "react";
import { twMerge } from "tailwind-merge";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Navbar({ className, children, ...props }: NavbarProps) {
  return (
    <div
      className={twMerge("flex flex-wrap justify-center gap-24", className)}
      {...props}
    >
      {children}
    </div>
  );
}
