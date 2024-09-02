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
              <Chart />
            </Card>
          </CardDescription>
        </Card>
      </ContentLayout>
    </DashboardLayout>
  );
};
