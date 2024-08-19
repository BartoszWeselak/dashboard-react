import React from "react";
import { twMerge } from "tailwind-merge";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  src?: string;
}

export function Avatar({ className, src }: AvatarProps) {
  return <img src={src} alt="text" className="rounded-full w-24" />;
}
