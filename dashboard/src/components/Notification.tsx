import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./Button";
import { useDisclosure } from "../hooks/use-disclosure";
import { Divider } from "./Divider";

interface NotificationBarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const NotificationBar = forwardRef<HTMLDivElement, NotificationBarProps>(
  ({ children, className, ...props }, ref) => {
    const { close, open, isOpen } = useDisclosure();

    return (
      <div
        ref={ref}
        className={twMerge("flex justify-end", className)}
        {...props}
      >
        <Button
          widths={"xsmall"}
          variant={"none"}
          onClick={() => {
            if (!isOpen) {
              open();
            } else {
              close();
            }
          }}
        >
          <FontAwesomeIcon icon={faBell} />
        </Button>
        <NotificationContainer isOpen={isOpen}>
          {children}
        </NotificationContainer>
      </div>
    );
  }
);

interface NotificationContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}
const NotificationContainer = forwardRef<
  HTMLDivElement,
  NotificationContainerProps
>(({ children, isOpen, ...props }, ref) => {
  if (!isOpen) return null;
  return (
    <div
      ref={ref}
      className="fixed bg-white h-5/6 mt-[3%] h-[96%] shadow-lg w-1/6 text-center p-4"
      {...props}
    >
      <h1 className="font-extrabold text-xl">Notification</h1>
      <Divider />
      {children}
    </div>
  );
});

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className="w-full">
        {children}
      </div>
    );
  }
);
