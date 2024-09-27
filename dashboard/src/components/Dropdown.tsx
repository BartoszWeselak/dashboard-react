import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "./Link";

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  src?: string;
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={twMerge("", className)} {...props}>
        <ul>{children}</ul>
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";

export const DropdownItem = forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, className, src, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          "hover:opacity-80  hover:bg-gray-400  m-2 ",
          className
        )}
        {...props}
      >
        <Link src={src}>
          <li>{children}</li>
        </Link>
      </div>
    );
  }
);

DropdownItem.displayName = "DropdownItem";
