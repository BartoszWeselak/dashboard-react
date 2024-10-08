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
import { Image } from "../../components/Image";
import cryptobanner from "../../assets/banners/Cryptocurrency.png";
import { Banner } from "../../components/Banner";
interface DashboardTabProps {
  name: string;
  dataset: "stocks" | "cryptocurrencies" | "commodities";
}

const colorMap: { [key: string]: string } = {
  gold: "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-md border border-yellow-600 opacity-80 text-gray-600",
  blue: "bg-gradient-to-r from-blue-400 via-blue-400 to-blue-500 shadow-md border border-blue-500 opacity-80 text-gray-600",
  lightblue:
    "bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400 shadow-md border border-blue-300 opacity-80 text-gray-600",
  purple:
    "bg-gradient-to-r from-purple-300 via-purple-200 to-purple-500 shadow-md border border-blue-300 opacity-80 text-gray-600",
  red: "bg-gradient-to-r from-red-300 via-red-400 to-red-500 shadow-md border border-blue-300 opacity-80 text-gray-600",
  silver:
    "bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 shadow-md border border-blue-300 opacity-80 text-gray-600",
  microsoft:
    "bg-gradient-to-r from-green-300 via-green-300 via-yellow-300 to-red-300 shadow-md border border-blue-300 opacity-80 text-gray-600",
  gray: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md border border-blue-300 opacity-80 text-gray-600 text-gray-400",
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
      <Card size={"full"} className="max-w-full">
        <CardDescription>
          <Chart options={chartOptions} />
        </CardDescription>
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
              <CardTitle>
                <Image
                  size={"xsmall"}
                  src={`data:image/png;base64,${item.icon}`}
                />{" "}
                {item.name}
              </CardTitle>
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
                <TableCell>
                  <Image
                    size={"xsmall"}
                    src={`data:image/png;base64,${item.icon}`}
                  />
                </TableCell>
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
