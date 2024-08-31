import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  options?: Highcharts.Options;
}

const defaultChartOptions: Highcharts.Options = {
  title: {
    text: "Bitcoin",
  },
  xAxis: {
    type: "datetime",
    labels: {
      format: "{value:%Y-%m-%d}",
    },
  },
  series: [
    {
      type: "line",

      data: [
        [Date.UTC(2024, 7, 23), 2.8],
        [Date.UTC(2024, 7, 24), 3.7],
        [Date.UTC(2024, 7, 25), 6.1],
        [Date.UTC(2024, 7, 26), 1.6],
        [Date.UTC(2024, 7, 27), 4.2],
        [Date.UTC(2024, 7, 28), 5],
        [Date.UTC(2024, 7, 29), 2.2],
        [Date.UTC(2024, 7, 30), 3.4],
      ],
      name: "Bitcoin Value",
    },
  ],
};

export const Chart = ({
  children,
  className,
  options = defaultChartOptions,
  ...props
}: ChartProps) => {
  return (
    <div className={className} {...props}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
