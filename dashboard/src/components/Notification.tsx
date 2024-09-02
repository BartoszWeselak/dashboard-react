import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./Button";
import { useDisclosure } from "../hooks/use-disclosure";

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  ({ children, className, ...props }) => {
    const { close, open, isOpen } = useDisclosure();

    return (
      <div className={twMerge("flex justify-end", className)} {...props}>
        <Button widths={"xsmall"} variant={"none"}>
          <FontAwesomeIcon icon={faBell} />
        </Button>
        <NotificationContainer>{children}</NotificationContainer>
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
const NotificationContainer = forwardRef<HTMLDivElement, NotificationProps>(
  ({ children, isOpen }: NotificationContainerProps) => {
    if (!isOpen) return null;
    return <p>test</p>;
  }
);

export default Notification;
