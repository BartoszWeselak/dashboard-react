import React from "react";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Divider } from "../components/Divider";
import { twMerge } from "tailwind-merge";
import { Card } from "../components/Card";

interface AuthLayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export const AuthLayout = ({ children, className }: AuthLayoutProps) => {
  return (
    <Card size={"half"} className="h-screen">
      <div className={twMerge("flex flex-col text-center m-8 p-4", className)}>
        {children}
      </div>
    </Card>
  );
};
