import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "mx-auto border content-center rounded-lg shadow-lg ring-2 ring-black/5 ",
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
      size: {
        flex: "",
        wide: "h-16 w-5/6",
        small: "h-48 w-48",
        medium: "h-96 w-96",
        half: "w-1/2",
        full: "w-full",
        tquater: "w-3/4",
        eighty: "w-4/5",
      },
      colors: {
        gray: "bg-gray-200",
      },
      display: {
        col: "flex flex-row",
        row: "flex flex-col",
      },
    },
    defaultVariants: {
      shadow: "large",
      borderRadius: "large",
      size: "flex",
      colors: "gray",
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
      display: {
        col: "flex flex-row",
        row: "flex flex-col",
      },
      margins: {
        small: "m-2",
        medium: "m-4",
        large: "m-6",
      },
    },
    defaultVariants: {
      size: "medium",
      colors: "gray",
      margins: "small",
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
  (
    {
      children,
      className,
      shadow,
      colors,
      size,
      display,
      borderRadius,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          cardVariants({ shadow, borderRadius, display, size, colors }),
          className
        )}
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
  ({ children, className, size, colors, display, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          cardDescriptionVariants({ size, colors, display }),
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
