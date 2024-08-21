import React from "react";
import { twMerge } from "tailwind-merge";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Divider({ className, ...props }: NavbarProps) {
  return (
    <>
      {" "}
      <div
        className={twMerge(
          "flex flex-wrap justify-center gap-4 m-8",
          className
        )}
        {...props}
      ></div>
      <hr className="h-0 bg-gray-600 m-8" />
    </>
  );
}
