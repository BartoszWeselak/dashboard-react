import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  ({ children, className, ...props }) => {
    return (
      <div className={twMerge("fixed z-50", className)} {...props}>
        {children}
      </div>
    );
  }
);

export default Notification;
