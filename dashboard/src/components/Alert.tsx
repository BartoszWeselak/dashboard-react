import React, { forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}

export function Alert({ children, isOpen, className, ...props }: AlertProps) {
  if (!isOpen) return null;

  return (
    <div
      className={twMerge(
        "fixed top-0 right-0 m-4 w-1/6 h-16 p-2 bg-white rounded-md shadow-lg ring-1 ring-black/10 z-50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export const AlertTitle = forwardRef<HTMLButtonElement, AlertProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={twMerge("font-semibold", className)} {...props}>
        {children}
      </div>
    );
  }
);

export const AlertDescription = forwardRef<HTMLButtonElement, AlertProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={twMerge("text-gray-700", className)} {...props}>
        {children}
      </div>
    );
  }
);

interface AlertContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export function AlertContainer({
  className,
  children,
  ...props
}: AlertContainerProps) {
  //   const [isAlertOpen, setIsAlertOpen] = useState(false);

  //   const openAlert = () => setIsAlertOpen(true);
  //   const closeAlert = () => setIsAlertOpen(false);
  return (
    <div>
      <Alert isOpen={true}>{children}</Alert>
    </div>
  );
}
