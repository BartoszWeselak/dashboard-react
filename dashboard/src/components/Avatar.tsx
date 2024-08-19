import React from "react";
import { twMerge } from "tailwind-merge";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  src?: string;
  children?: React.ReactNode;
}

export function Avatar({ className, src, ...props }: AvatarProps) {
  return (
    <img
      src={src}
      alt="text"
      className={twMerge("rounded-full w-24", className)}
      {...props}
    />
  );
}

export function AvatarBox({ className, src, children, ...props }: AvatarProps) {
  return (
    <div
      className={twMerge("flex flex-row gap-2 bg-gray-500 m-2 rounded-full")}
      {...props}
    >
      {" "}
      {children}
    </div>
  );
}
