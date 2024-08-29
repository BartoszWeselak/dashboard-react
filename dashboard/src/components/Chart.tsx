// TODO

import React from "react";

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export function Chart({ children, className, ...props }: ChartProps) {
  return <p></p>;
}

export function ChartTimeline({ children, className, ...props }: ChartProps) {
  return <p></p>;
}
export function ChartHeader({ children, className, ...props }: ChartProps) {
  return <p>header</p>;
}
