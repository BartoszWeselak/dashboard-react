import React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "./Link";

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  src?: string;
}

export function Dropdown({ children, className, ...props }: DropdownProps) {
  return (
    <div className={twMerge("", className)} {...props}>
      <ul>{children}</ul>
    </div>
  );
}

export function DropdownItem({
  children,
  className,
  src,
  ...props
}: DropdownProps) {
  return (
    <div
      className={twMerge(
        "bg-gray-500 hover:opacity-80 m-2 rounded-xl",
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
