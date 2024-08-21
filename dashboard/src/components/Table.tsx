import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode;
  className?: string;
}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  className?: string;
}

interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <table ref={ref} className={twMerge("", className)} {...props}>
        {children}
      </table>
    );
  }
);

Table.displayName = "Table";

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <tr ref={ref} className={twMerge("", className)} {...props}>
        {children}
      </tr>
    );
  }
);

TableRow.displayName = "TableRow";

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <td ref={ref} className={twMerge("", className)} {...props}>
        {children}
      </td>
    );
  }
);

TableCell.displayName = "TableCell";
