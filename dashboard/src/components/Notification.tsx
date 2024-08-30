import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  ({ children, className, ...props }) => {
    return (
      <div className={twMerge("flex justify-end", className)} {...props}>
        <FontAwesomeIcon icon={faBell} />
        {children}
      </div>
    );
  }
);

export default Notification;
