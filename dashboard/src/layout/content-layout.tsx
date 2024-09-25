import React, { Children } from "react";
import { Card, CardDescription, CardTitle } from "../components/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "../components/Table";
import { Chart } from "../components/Chart";
import { Divider } from "../components/Divider";

interface ContentLayoutProps {
  children?: React.ReactNode;
}

export const ContentLayout = ({ children }: ContentLayoutProps) => {
  return <div className="flex flex-wrap w-full gap-4 p-24">{children}</div>;
};
