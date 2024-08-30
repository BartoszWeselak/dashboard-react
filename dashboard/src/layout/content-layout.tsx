import React from "react";
import { Card, CardDescription, CardTitle } from "../components/Card";
import { Button } from "../components/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableRow,
} from "../components/Table";
import { AuthLayout } from "./auth-layout";
import { Alert, AlertDescription, AlertTitle } from "../components/Alert";
import { Modal } from "../components/Modal";
import { Chart } from "../components/Chart";

export const ContentLayout = () => {
  return (
    <div className="flex  flex-wrap w-full gap-4 p-24">
      <Card>
        <CardTitle>card title 1</CardTitle>
        <CardDescription>
          <Modal triggerButton={<Button className="bg-red-600">test</Button>}>
            <Chart />
          </Modal>
        </CardDescription>
      </Card>
      <Card>
        <CardTitle>card title 2</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <Card>
        <CardTitle>card title 3</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <Card>
        <CardTitle>card title 4</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <Card>
        <CardTitle>card title 5</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <Card>
        <CardTitle>card title 6</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <Card>
        <CardTitle>card title 7</CardTitle>
        <CardDescription>test </CardDescription>
      </Card>
      <Card>
        <CardTitle>card title 8</CardTitle>
        <CardDescription>
          {" "}
          <Modal>
            <AuthLayout />
          </Modal>
        </CardDescription>
      </Card>
      <Card>
        <CardTitle>card title 9</CardTitle>
        <CardDescription>
          <Alert>
            <AlertTitle>test</AlertTitle>
            <AlertDescription>test</AlertDescription>
          </Alert>
        </CardDescription>
      </Card>
      <Card>
        <CardTitle>card title 10</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <Card>
        <CardTitle>card title 11</CardTitle>
        <CardDescription>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>test</TableCell>
                <TableCell>test</TableCell>
                <TableCell>test</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>test</TableCell>
                <TableCell>test</TableCell>
                <TableCell>test</TableCell>
              </TableRow>
            </TableBody>
            <TableFoot>
              <TableRow>
                <TableCell>test</TableCell>
                <TableCell>test</TableCell>
                <TableCell>test</TableCell>
              </TableRow>
            </TableFoot>
          </Table>
        </CardDescription>
      </Card>
      <Card>
        <CardTitle>card title 12</CardTitle>
        <CardDescription>
          <Button variant={"danger"}>test</Button>
        </CardDescription>
      </Card>
    </div>
  );
};
