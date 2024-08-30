import React, { forwardRef, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";
import { useDisclosure } from "../hooks/use-disclosure";

interface AlertContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const AlertContainer = forwardRef<HTMLDivElement, AlertContainerProps>(
  ({ children, isOpen, className, onClose, ...props }, ref) => {
    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={twMerge(
          "fixed top-0 right-0 m-4 w-1/6 p-2 bg-white rounded-md shadow-lg ring-1 ring-black/10 z-50",
          className
        )}
        {...props}
      >
        <div className="text-right">
          <Button
            onClick={onClose}
            variant={"danger"}
            size={"small"}
            className="w-8"
          >
            X
          </Button>
        </div>
        <div>{children}</div>
      </div>
    );
  }
);

export const AlertTitle = forwardRef<HTMLButtonElement, AlertContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={twMerge("font-semibold text-left", className)} {...props}>
        {children}
      </div>
    );
  }
);

export const AlertDescription = forwardRef<
  HTMLButtonElement,
  AlertContainerProps
>(({ className, children, ...props }, ref) => {
  return (
    <div className={twMerge("text-gray-700 text-left", className)} {...props}>
      {children}
    </div>
  );
});

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  trigger?: React.ReactNode;
  text?: string;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, children, trigger, text, ...props }, ref) => {
    const { close, open, isOpen } = useDisclosure();

    return (
      <div ref={ref}>
        {trigger ? (
          React.cloneElement(trigger as React.ReactElement<any>, {
            onClick: open,
          })
        ) : (
          <Button
            onClick={open}
            className={twMerge("px-4 py-2 bg-blue-500 text-white rounded")}
          >
            {text}
          </Button>
        )}
        <AlertContainer
          isOpen={isOpen}
          onClose={close}
          ref={ref}
          className={twMerge("", className)}
          {...props}
        >
          {children}
        </AlertContainer>
      </div>
    );
  }
);
