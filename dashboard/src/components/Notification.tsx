import React from "react";
import { twMerge } from "tailwind-merge";

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export function Notification({
  children,
  className,
  ...props
}: NotificationProps) {
  return <div className={twMerge("fixed    z-50")}></div>;
}
