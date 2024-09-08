import React from "react";
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
import useFetchData from "../../../api/api";
import { Link } from "../../../components/Link";

export const DashboardRoute: React.FC = () => {
  const { assets } = useFetchData("cryptocurrencies");
  const topThreeCryptocurrencies = assets.slice(0, 3);

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
              <CardTitle>Crypto Data</CardTitle>
              <CardDescription display={"col"}>
                {topThreeCryptocurrencies.map((item) => (
                  <Card key={item.id} className="bg-yellow-300">
                    <Link src={"/info/" + item.id}>
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
