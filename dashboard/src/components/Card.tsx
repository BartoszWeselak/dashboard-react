import React from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={twMerge(
        "max-w-sm mx-auto h-64 w-64 border border-gray-200 rounded-lg shadow-md overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className, ...props }: CardProps) {
  return (
    <h1
      className={twMerge("text-xl font-semibold mb-2 text-center", className)}
      {...props}
    >
      {children}
    </h1>
  );
}

export function CardDescription({ children, className, ...props }: CardProps) {
  return (
    <div className="p-12" {...props}>
      <p className={twMerge("text-gray-600", className)}>{children}</p>
    </div>
  );
}
