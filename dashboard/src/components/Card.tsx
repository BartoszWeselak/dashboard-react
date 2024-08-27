import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "mx-auto h-64 w-64 border border-gray-200 rounded-lg shadow-lg ring-2 ring-black/5 overflow-hidden content-center hover:opacity-90",
  {
    variants: {
      shadow: {
        none: "shadow-none",
        small: "shadow-sm",
        medium: "shadow-md",
        large: "shadow-lg",
      },
      borderRadius: {
        none: "rounded-none",
        small: "rounded-sm",
        medium: "rounded-md",
        large: "rounded-lg",
      },
    },
    defaultVariants: {
      shadow: "large",
      borderRadius: "large",
    },
  }
);

const cardTitleVariants = cva("text-xl font-semibold text-center", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-lg",
      large: "text-xl",
    },
    colors: {
      black: "text-black-500",
      blue: "text-blue-500",
      green: "text-green-500",
      yellow: "text-yellow-500",
      red: "text-red-500",
    },
  },
  defaultVariants: {
    size: "large",
    colors: "black",
  },
});

const cardDescriptionVariants = cva(
  "text-gray-700 m-12 text-center content-center",
  {
    variants: {
      size: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
      },
      colors: {
        gray: "text-gray-500",
        blue: "text-blue-500",
        green: "text-green-500",
        yellow: "text-yellow-500",
        red: "text-red-500",
      },
    },
    defaultVariants: {
      size: "medium",
      colors: "gray",
    },
  }
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: React.ReactNode;
  className?: string;
}

interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof cardTitleVariants> {
  children: React.ReactNode;
  className?: string;
}

interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardDescriptionVariants> {
  children: React.ReactNode;
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, shadow, borderRadius, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(cardVariants({ shadow, borderRadius }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, className, size, colors, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(cardTitleVariants({ size, colors }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<HTMLDivElement, CardDescriptionProps>(
  ({ children, className, size, colors, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          cardDescriptionVariants({ size, colors }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardDescription.displayName = "CardDescription";
