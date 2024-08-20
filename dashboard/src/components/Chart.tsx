import React from "react";
import { Bar } from "react-chartjs-2";

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

export function MockChart({ children, className }: ChartProps) {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Colors",
        data: [12, 19, 3],
        backgroundColor: ["red", "blue", "yellow"],
      },
    ],
  };

  return <Bar data={data} />;
}
