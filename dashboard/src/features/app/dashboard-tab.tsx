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

interface DashboardTabProps {
  name: string;
  dataset: "stocks" | "cryptocurrencies" | "commodities";
}

export const DashboardTab = ({ name, dataset }: DashboardTabProps) => {
  const { assets } = useFetchData(dataset);
  const topThreeCryptocurrencies = assets.slice(0, 3);
  const [chartData, setChartData] = useState<Highcharts.SeriesOptionsType[]>(
    []
  );

  useEffect(() => {
    if (assets.length > 0) {
      const newChartData: Highcharts.SeriesBarOptions = {
        type: "bar",
        name: "price",
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
        text: "Cryptocurrencies",
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
            <Card key={item.id} className="bg-yellow-300">
              <Link src={item.type + "/info/" + item.id}>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>
                  {item.symbol} - ${item.snapshots[0]?.price} USD
                </CardDescription>
              </Link>
            </Card>
          ))}
        </CardDescription>
      </Card>
      <Card size={"full"} className="p-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Value</TableCell>

              <TableCell>Buy</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets.map((item) => (
              <TableRow>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.snapshots[0].price}</TableCell>
                <Link src={"/info/" + item.id}>
                  <TableCell>x</TableCell>
                </Link>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </ContentLayout>
  );
};
