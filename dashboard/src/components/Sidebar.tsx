import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useDisclosure } from "../hooks/use-disclosure";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  classNameButton?: string;
}

export function Sidebar({
  children,
  className,
  classNameButton,
  ...props
}: SidebarProps) {
  const { close, open, isOpen, toggle } = useDisclosure(true);

  return (
    <div className="relative">
      <button
        onClick={toggle}
        className={twMerge(
          "fixed top-4 z-50 p-2 bg-gray-800 text-white rounded transition-all duration-500 opacity-50",
          isOpen ? "left-52" : "left-4",
          classNameButton
        )}
      >
        {isOpen ? "<" : ">"}
      </button>

      <div
        className={twMerge(
          "top-0 left-0 h-screen transition-transform duration-500 ",
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-0",
          className
        )}
        {...props}
      ></div>
      <div
        className={twMerge(
          "fixed top-0 left-0 h-screen bg-gray-600 transition-transform duration-500 ",
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-0",
          className
        )}
        {...props}
      >
        {isOpen && children}
      </div>
    </div>
  );
}

export function SidebarHeader({ children, className, ...props }: SidebarProps) {
  return (
    <div className={twMerge(" text-lg text-center", className)} {...props}>
      {children}
    </div>
  );
}
