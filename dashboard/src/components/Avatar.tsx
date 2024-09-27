import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  src?: string;
  children?: React.ReactNode;
}

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, src, ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt="text"
        className={twMerge("rounded-full w-24 ", className)}
        {...props}
      />
    );
  }
);

Avatar.displayName = "Avatar";

export const AvatarBox = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge("flex flex-row gap-2 m-2 rounded-full", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AvatarBox.displayName = "AvatarBox";
