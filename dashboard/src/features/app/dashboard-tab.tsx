import React, { useEffect, useState } from "react";
import { ContentLayout } from "../../layout/content-layout";
import { Card, CardDescription, CardTitle } from "../../components/Card";
import { Chart } from "../../components/Chart";
import { Link } from "../../components/Link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "../../components/Table";
import { useFetchData } from "../../api/api";
import { useNavigate } from "react-router-dom";

interface DashboardTabProps {
  name: string;
  dataset: "stocks" | "cryptocurrencies" | "commodities";
}

const colorMap: { [key: string]: string } = {
  yellow: "bg-gradient-to-r from-yellow-400 to-yellow-600",
  blue: "bg-gradient-to-r from-blue-400 to-blue-600",
  lightblue: "bg-gradient-to-r from-blue-300 to-blue-500",
};

export const DashboardTab = ({ name, dataset }: DashboardTabProps) => {
  const navigate = useNavigate();

  const { assets } = useFetchData(dataset);
  const topThreeCryptocurrencies = assets.slice(0, 3);
  const [chartData, setChartData] = useState<Highcharts.SeriesOptionsType[]>(
    []
  );

  useEffect(() => {
    if (assets.length > 0) {
      const newChartData: Highcharts.SeriesBarOptions = {
        type: "bar",
        name: "Price",
        data: assets.map((item) => ({
          name: item.name,
          y: item.snapshots[0].price,
        })),
      };

      setChartData([newChartData]);
    }
  }, [assets]);

  const chartOptions: Highcharts.Options = {
    chart: {
      type: "bar",
    },
    title: {
      text: name + " Prices",
    },
    xAxis: {
      categories: assets.map((item) => item.name),
      title: {
        text: name,
      },
    },
    yAxis: {
      title: {
        text: "Price (USD)",
      },
    },
    series: chartData,
  };

  return (
    <ContentLayout>
      <Card size={"full"}>
        <Chart options={chartOptions} />
      </Card>
      <Card size={"full"}>
        <CardTitle>Popular</CardTitle>
        <CardDescription display={"col"}>
          {topThreeCryptocurrencies.map((item) => (
            <Card
              key={item.id}
              size={"small"}
              className={
                item.color && colorMap[item.color]
                  ? colorMap[item.color]
                  : "bg-red-500"
              }
              onClick={() => navigate("../" + item.type + "/info/" + item.id)}
              style={{ cursor: "pointer" }}
            >
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>
                {item.symbol} - ${item.snapshots[0]?.price} USD
              </CardDescription>
            </Card>
          ))}
        </CardDescription>
      </Card>
      <Card size={"full"} className="p-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Icon</TableCell>

              <TableCell>Name</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets.map((item) => (
              <TableRow
                key={item.id}
                onClick={() => navigate("../" + item.type + "/info/" + item.id)}
                style={{ cursor: "pointer" }}
              >
                <TableCell>x</TableCell>

                <TableCell>{item.name}</TableCell>
                <TableCell>{item.snapshots[0].price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </ContentLayout>
  );
};
