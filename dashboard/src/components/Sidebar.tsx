import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { useDisclosure } from "../hooks/use-disclosure";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  classNameButton?: string;
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ children, className, classNameButton, ...props }) => {
    const { close, open, isOpen, toggle } = useDisclosure(true);

    return (
      <div className="relative">
        <button
          onClick={toggle}
          className={twMerge(
            "fixed top-4 z-50 p-2 bg-gray-600 text-white rounded transition-all duration-500 opacity-50",
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
            "fixed top-0 left-0 h-screen bg-gray-100 transition-transform duration-500 ",
            isOpen ? "translate-x-0 w-64" : "-translate-x-full w-0",
            className
          )}
          {...props}
        >
          <div className="flex flex-col h-screen">{isOpen && children}</div>
        </div>
      </div>
    );
  }
);
const SidebarHeader = forwardRef<HTMLDivElement, SidebarProps>(
  ({ children, className, ...props }) => {
    return (
      <div
        className={twMerge(" text-lg text-center h-1/5", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

const SidebarMain = forwardRef<HTMLDivElement, SidebarProps>(
  ({ children, className, ...props }) => {
    return (
      <div className={twMerge(" text-center h-3/5", className)} {...props}>
        {children}
      </div>
    );
  }
);

const SidebarFooter = forwardRef<HTMLDivElement, SidebarProps>(
  ({ children, className, ...props }) => {
    return (
      <div className={twMerge(" text-center h-1/5", className)} {...props}>
        {children}
      </div>
    );
  }
);

export { Sidebar, SidebarHeader, SidebarMain, SidebarFooter };
