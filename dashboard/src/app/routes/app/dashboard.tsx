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

export const DashboardRoute = () => {
  const popData = [
    { Name: "Bitcoin", Value: 133.4, color: "bg-yellow-300" },
    { Name: "ETH", Value: 132.32, color: "bg-blue-300" },
    { Name: "Doge", Value: 1.3, color: "bg-yellow-200" },
  ];

  const tableData = [
    { Name: "B", Value: 100, Volume: 200, Cap: 300 },
    { Name: "B", Value: 100, Volume: 200, Cap: 300 },
    { Name: "B", Value: 100, Volume: 200, Cap: 300 },
    { Name: "B", Value: 100, Volume: 200, Cap: 300 },
    { Name: "B", Value: 100, Volume: 200, Cap: 300 },
  ];
  return (
    <DashboardLayout>
      <Tabs defaultActiveTab={0}>
        <Tab label="Crypto" icon={faBitcoinSign}>
          <Divider />
          <ContentLayout>
            <Card size={"full"}>
              <Chart />
            </Card>
            <Card size={"full"}>
              <CardTitle>test</CardTitle>

              <CardDescription display={"col"}>
                {popData.map((item, index) => (
                  <Card key={index} className={item.color}>
                    <CardTitle>{item.Name}</CardTitle>
                    <CardDescription>{item.Value} USD</CardDescription>
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
                    <TableCell>MarketCap</TableCell>
                    <TableCell>Wolumen</TableCell>
                    <TableCell>Buy</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.Name}</TableCell>
                      <TableCell>{item.Value}</TableCell>
                      <TableCell>{item.Volume}</TableCell>
                      <TableCell>{item.Cap}</TableCell>
                      <TableCell>x</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </ContentLayout>
        </Tab>
        <Tab label="Currency" icon={faDollar}>
          <Divider />
        </Tab>
        <Tab label="Materials" icon={faDroplet}>
          <Divider />
        </Tab>
      </Tabs>
    </DashboardLayout>
  );
};
