import React, { useEffect, useState } from "react";
import {
  faBitcoinSign,
  faDollar,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";
import { Divider } from "../../../components/Divider";
import { Tab, Tabs } from "../../../components/Tab";
import { ContentLayout } from "../../../layout/content-layout";
import { DashboardLayout } from "../../../layout/dashboard-layout";
import { Card, CardTitle, CardDescription } from "../../../components/Card";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "../../../components/Table";
import { Chart } from "../../../components/Chart";
import { useFetchData } from "../../../api/api";
import { Link } from "../../../components/Link";
import { DashboardTab } from "../../../features/app/dashboard-tab";

const data: Highcharts.Options = {
  title: {
    text: "tests",
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
      name: "Value",
    },
  ],
};

export const DashboardRoute: React.FC = () => {
  const { assets } = useFetchData("cryptocurrencies");
  const topThreeCryptocurrencies = assets.slice(0, 3);
  const [chartData, setChartData] = useState<Highcharts.SeriesOptionsType[]>(
    []
  );

  useEffect(() => {
    if (assets.length > 0) {
      const newChartData: Highcharts.SeriesBarOptions = {
        type: "bar",
        name: "Cryptocurrency Prices",
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
      text: "Cryptocurrency Prices",
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
    <DashboardLayout>
      <Tabs defaultActiveTab={0}>
        <Tab label="Crypto" icon={faBitcoinSign}>
          <Divider />
          <DashboardTab name="Crypto" dataset="cryptocurrencies" />
        </Tab>
        <Tab label="Currency" icon={faDollar}>
          <Divider />
        </Tab>
        <Tab label="Materials" icon={faDroplet}>
          <Divider />
          <DashboardTab name="Mats" dataset="commodities" />
        </Tab>
      </Tabs>
    </DashboardLayout>
  );
};
