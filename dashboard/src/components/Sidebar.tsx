import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";

interface SidebarProps {
  children: React.ReactNode;
  className?: string;
}

export function Sidebar({ children, className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded"
      >
        {isOpen ? "<" : ">"}
      </Button>

      <div
        className={twMerge(
          "fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-4 transition-transform transform ",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        {children}
      </div>

      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed  bg-black opacity-50 z-40"
        />
      )}
    </>
  );
}
