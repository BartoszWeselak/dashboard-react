import React, { forwardRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const chartOptions: Highcharts.Options = {
  chart: {
    type: "line",
  },
  title: {
    text: "My Line Chart",
  },
  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  },
  yAxis: {
    title: {
      text: "Value",
    },
  },
  series: [
    {
      type: "line",
      name: "Series 1",
      data: [1, 2, 3, 4, 5, 6],
    },
  ],
};

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  options?: Highcharts.Options;
}

export const Chart = forwardRef<HTMLDivElement, ChartProps>(
  ({ children, className, options, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        {children}
      </div>
    );
  }
);
