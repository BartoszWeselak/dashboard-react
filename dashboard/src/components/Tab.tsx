import React, { useState, ReactElement, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactElement<TabProps>[];
  className?: string;
  defaultActiveTab: number;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ children, className, defaultActiveTab, ...props }, ref) => {
    const [activeTab, setActiveTab] = useState<number>(defaultActiveTab);

    return (
      <div>
        <div className="flex">
          {children.map((tab, index) => (
            <Button
              variant={"tab"}
              size={"xlarge"}
              key={index}
              className={index === activeTab ? "active" : ""}
              onClick={() => setActiveTab(index)}
            >
              {tab.props.label}
            </Button>
          ))}
        </div>
        <div ref={ref} className={twMerge("", className)} {...props}>
          {children[activeTab]}
        </div>
      </div>
    );
  }
);
interface TabProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export const Tab = forwardRef<HTMLDivElement, TabProps>(
  ({ children, className, ...props }) => {
    return (
      <div className={twMerge("", className)} {...props}>
        {children}
      </div>
    );
  }
);
