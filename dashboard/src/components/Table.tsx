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
    border: "none",
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

const tableCellVariants = cva("text-sm", {
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
    border: {
      small: " border-1 border-black",
    },
  },
  defaultVariants: {
    alignment: "center",
    padding: "small",
  },
});

interface TableProps
  extends React.HTMLAttributes<HTMLElement>,
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

export const TableBody = ({
  children,
  className,
  size,
  border,
  ...props
}: TableProps) => {
  return (
    <tbody
      className={twMerge(tableVariants({ size, border }), className)}
      {...props}
    >
      {children}
    </tbody>
  );
};

TableBody.displayName = "TableBody";

export const TableHead = ({
  children,
  className,
  size,
  border,
  ...props
}: TableProps) => {
  return (
    <thead
      className={twMerge(tableVariants({ size, border }), className)}
      {...props}
    >
      {children}
    </thead>
  );
};

TableHead.displayName = "TableHead";

export const TableFoot = ({
  children,
  className,
  size,
  border,
  ...props
}: TableProps) => {
  return (
    <tfoot
      className={twMerge(tableVariants({ size, border }), className)}
      {...props}
    >
      {children}
    </tfoot>
  );
};

TableFoot.displayName = "TableFoot";

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
  ({ children, className, alignment, border, padding, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={twMerge(
          tableCellVariants({ alignment, padding, border }),
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
