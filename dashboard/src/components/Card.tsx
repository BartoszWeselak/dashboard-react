import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          "mx-auto h-64 w-64 border border-gray-200 rounded-lg shadow-md overflow-hidden content-center hover:opacity-90",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardTitle = forwardRef<HTMLHeadingElement, CardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={twMerge("text-xl font-semibold text-center", className)}
        {...props}
      >
        {children}
      </h1>
    );
  }
);

CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          "text-gray-700 m-12 text-center content-center",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardDescription.displayName = "CardDescription";
