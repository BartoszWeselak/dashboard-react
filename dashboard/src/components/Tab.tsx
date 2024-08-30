import React, { useState, ReactElement, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";
import { Button } from "./Button";
import { Divider } from "./Divider";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { IconLookup } from "@fortawesome/free-solid-svg-icons";

const tabsCVA = cva("flex", {
  variants: {
    spacing: {
      none: "",
      small: "space-x-2",
      medium: "space-x-4",
      large: "space-x-8",
    },
    widths: {
      small: "w-1/2",
      medium: "w-4/5",
    },
    marginsx: {
      small: "mx-12",
      medium: "mx-[10%]",
      large: "mx-36",
    },
  },
  defaultVariants: {
    spacing: "large",
    widths: "medium",
    marginsx: "medium",
  },
});

const tabContentCVA = cva("", {
  variants: {
    padding: {
      none: "",
      small: "p-2",
      medium: "p-4",
      large: "p-6",
    },
  },
  defaultVariants: {
    padding: "none",
  },
});

interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsCVA> {
  children: ReactElement<TabProps>[];
  className?: string;
  defaultActiveTab: number;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ children, className, defaultActiveTab, spacing, ...props }, ref) => {
    const [activeTab, setActiveTab] = useState<number>(defaultActiveTab);

    return (
      <div>
        <div className={twMerge(tabsCVA({ spacing }), className)}>
          {children.map((tab, index) => (
            <Button
              variant={"tab"}
              size={"xlarge"}
              key={index}
              className={index === activeTab ? "active" : ""}
              onClick={() => setActiveTab(index)}
            >
              <div className="flex flex-col items-center">
                {tab.props.icon && (
                  <FontAwesomeIcon
                    color={tab.props.iconcolor}
                    icon={tab.props.icon}
                  />
                )}
                <br />
                <p className={twMerge("", tab.props.textclass)}>
                  {tab.props.label}
                </p>
              </div>
            </Button>
          ))}
        </div>
        <div
          ref={ref}
          className={twMerge(tabContentCVA(), className)}
          {...props}
        >
          {children[activeTab]}
        </div>
      </div>
    );
  }
);

interface TabProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabContentCVA> {
  label: string;
  icon?: IconLookup;
  children: React.ReactNode;
  className?: string;
  textclass?: string;
  iconcolor?: string;
}

export const Tab = forwardRef<HTMLDivElement, TabProps>(
  ({ children, className, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(tabContentCVA({ padding }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
