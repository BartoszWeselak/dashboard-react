import React from "react";
import { Card, CardDescription, CardTitle } from "../components/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "../components/Table";
import { Chart } from "../components/Chart";

export const ContentLayout = () => {
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
    <div className="flex flex-wrap w-full gap-4 p-24">
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
    </div>
  );
};
