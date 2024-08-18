import React, { Children, useState } from "react";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
  children: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        className={twMerge(
          isOpen
            ? "fixed top-4 left-64 z-50 p-2 bg-gray-800 text-white rounded"
            : "fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded"
        )}
      >
        {isOpen ? "<" : ">"}
      </button>

      {isOpen ? bar() : null}
    </div>
  );
}
function bar() {
  return <div className="h-screen w-64 bg-gray-600">{}</div>;
}
