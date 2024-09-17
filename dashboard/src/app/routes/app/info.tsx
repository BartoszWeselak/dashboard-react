import { useEffect, useState } from "react";
import { useFetchDataSingle } from "../../../api/api";
import { Button } from "../../../components/Button";
import { Card, CardDescription, CardTitle } from "../../../components/Card";
import { Chart } from "../../../components/Chart";
import { Modal } from "../../../components/Modal";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../../../components/Table";
import { ContentLayout } from "../../../layout/content-layout";
import { DashboardLayout } from "../../../layout/dashboard-layout";
import { useParams } from "react-router-dom";

export const InfoRoute = () => {
  const { id, type } = useParams<{
    id: string;
    type?: "cryptocurrencies" | "commodities" | "stocks";
  }>();
  const assetType = type || "cryptocurrencies";

  const { assets } = useFetchDataSingle(assetType, Number(id));
  const [chartData, setChartData] = useState<Highcharts.SeriesOptionsType[]>(
    []
  );

  useEffect(() => {
    if (assets?.snapshots) {
      const formattedData = assets.snapshots
        .map((snapshot: { date: string; price: number }) => {
          return [Date.parse(snapshot.date), snapshot.price];
        })
        .reverse();

      setChartData([
        {
          name: "Price of " + assets.name,
          data: formattedData,
          type: "line",
        },
      ]);
    }
  }, [assets?.snapshots]);

  const chartOptions: Highcharts.Options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Cryptocurrency Prices",
    },
    xAxis: {
      title: {
        text: "Date",
      },
      type: "datetime",
      labels: {
        format: "{value:%Y-%m-%d}",
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
      <ContentLayout>
        <Card size={"eighty"}>
          <CardDescription display={"col"}>
            <CardTitle>Stats</CardTitle>

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>{assets?.type} </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Value</TableCell>
                  <TableCell>{assets?.snapshots[0].price} USD</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Volume</TableCell>
                  <TableCell>{assets?.volume} USD</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Market Cap</TableCell>
                  <TableCell>{assets?.marketCap} USD</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Modal
              triggerButton={<Button variant={"buy"}>Trade</Button>}
            ></Modal>
          </CardDescription>
        </Card>
        <Card size={"eighty"}>
          <CardDescription>
            <Chart options={chartOptions} />
          </CardDescription>
        </Card>
      </ContentLayout>
    </DashboardLayout>
  );
};
