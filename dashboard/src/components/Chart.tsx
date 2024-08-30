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
    text: "Simple Line Chart",
  },
  series: [
    {
      type: "line",
      data: [1, 2, 3, 4, 5],
      name: "Sample Data",
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
