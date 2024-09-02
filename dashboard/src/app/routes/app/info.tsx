import { Button } from "../../../components/Button";
import { Card, CardDescription, CardTitle } from "../../../components/Card";
import { Chart } from "../../../components/Chart";
import { Divider } from "../../../components/Divider";
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
  const { id } = useParams<{ id: string }>();

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

  return (
    <DashboardLayout>
      <ContentLayout>
        <Card size={"full"}>
          <CardDescription display={"col"}>
            <Card>
              <CardTitle>Stats</CardTitle>
              <CardDescription>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Value</TableCell>
                      <TableCell>500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Volume</TableCell>
                      <TableCell>500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Market Cap</TableCell>
                      <TableCell>500</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardDescription>
            </Card>
            <Card size={"half"}>
              <Chart options={data} />
            </Card>
          </CardDescription>
        </Card>
      </ContentLayout>
    </DashboardLayout>
  );
};
