import React, { useState, ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactElement<TabProps>[];
  className?: string;
}

export function Tabs({ children, className, ...props }: TabsProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div>
      <div className="flex flex-row text-center">
        {children.map((tab, index) => (
          <Button
            key={index}
            className={index === activeTab ? "active" : ""}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.label}
          </Button>
        ))}
      </div>
      <div className={twMerge("", className)} {...props}>
        {children[activeTab]}
      </div>
    </div>
  );
}

interface TabProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function Tab({ children, className, ...props }: TabProps) {
  return <div>{children}</div>;
}
