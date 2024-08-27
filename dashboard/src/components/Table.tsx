import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

const tableVariants = cva("text-center w-full h-full", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    border: {
      none: "border-none",
      thin: "border border-gray-300",
      thick: "border-2 border-gray-500",
    },
  },
  defaultVariants: {
    size: "large",
    border: "thick",
  },
});

const tableRowVariants = cva("", {
  variants: {
    highlight: {
      none: "",
      light: "bg-gray-100",
      dark: "bg-gray-200",
    },
  },
  defaultVariants: {
    highlight: "light",
  },
});

const tableCellVariants = cva("bg-slate-300 border-2 border-cyan-900", {
  variants: {
    alignment: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    padding: {
      none: "p-0",
      small: "p-2",
      medium: "p-4",
      large: "p-6",
    },
  },
  defaultVariants: {
    alignment: "center",
    padding: "small",
  },
});

interface TableProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {
  children?: React.ReactNode;
  className?: string;
}

interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    VariantProps<typeof tableRowVariants> {
  children?: React.ReactNode;
  className?: string;
}

interface TableCellProps
  extends React.HTMLAttributes<HTMLTableCellElement>,
    VariantProps<typeof tableCellVariants> {
  children?: React.ReactNode;
  className?: string;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ children, className, size, border, ...props }, ref) => {
    return (
      <table
        ref={ref}
        className={twMerge(tableVariants({ size, border }), className)}
        {...props}
      >
        {children}
      </table>
    );
  }
);

Table.displayName = "Table";

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, className, highlight, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={twMerge(tableRowVariants({ highlight }), className)}
        {...props}
      >
        {children}
      </tr>
    );
  }
);

TableRow.displayName = "TableRow";

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ children, className, alignment, padding, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={twMerge(
          tableCellVariants({ alignment, padding }),
          className
        )}
        {...props}
      >
        {children}
      </td>
    );
  }
);

TableCell.displayName = "TableCell";
