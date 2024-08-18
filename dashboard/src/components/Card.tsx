import React from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={twMerge(
        "max-w-sm mx-auto border border-gray-200 rounded-lg shadow-md overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children?: React.ReactNode }) {
  return <h1 className="text-xl font-semibold mb-2">{children}</h1>;
}

export function CardDescription({ children }: { children?: React.ReactNode }) {
  return (
    <div className="p-12">
      <p className="text-gray-600">{children}</p>
    </div>
  );
}
