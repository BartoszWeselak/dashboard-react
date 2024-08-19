import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

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
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleSidebar}
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
          "top-0 left-0 h-full bg-gray-600 transition-transform duration-500",
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
    <div
      className={twMerge(
        "flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 text-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
