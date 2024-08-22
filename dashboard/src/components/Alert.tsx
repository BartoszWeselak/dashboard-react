import React, { forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Alert({
  children,
  isOpen,
  className,
  onClose,
  ...props
}: AlertProps) {
  if (!isOpen) return null;

  return (
    <div
      className={twMerge(
        "fixed top-0 right-0 m-4 w-1/6 p-2 bg-white rounded-md shadow-lg ring-1 ring-black/10 z-50",
        className
      )}
      {...props}
    >
      <div className="text-right">
        <Button
          onClick={onClose}
          className=" w-6  bg-red-500 text-white rounded"
        >
          X
        </Button>
      </div>
      <div>{children}</div>
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
  trigger?: React.ReactNode;
  text?: string;
}

export function AlertContainer({
  className,
  children,
  trigger,
  text,
  ...props
}: AlertContainerProps) {
  const [isAlertOpen, setIsAlertOpen] = useState(true);

  const openAlert = () => setIsAlertOpen(true);
  const closeAlert = () => setIsAlertOpen(false);
  return (
    <div>
      {trigger ? (
        React.cloneElement(trigger as React.ReactElement<any>, {
          onClick: openAlert,
        })
      ) : (
        <Button
          onClick={openAlert}
          className={twMerge("px-4 py-2 bg-blue-500 text-white rounded")}
        >
          {text}
        </Button>
      )}
      <Alert
        isOpen={isAlertOpen}
        onClose={closeAlert}
        className={twMerge("", className)}
        {...props}
      >
        {children}
      </Alert>
    </div>
  );
}
