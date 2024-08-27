import React from "react";
import { Card, CardDescription, CardTitle } from "../components/Card";
import ModalContainer from "../components/Modal";
import { Button } from "../components/Button";
import { MockChart } from "../components/Chart";
import { Table, TableCell, TableRow } from "../components/Table";
import { AuthLayout } from "./auth-layout";

export const ContentLayout = () => {
  return (
    <div className="flex flex-wrap w-full gap-4 p-24">
      <Card>
        <CardTitle>card title 1</CardTitle>
        <CardDescription>
          <ModalContainer
            triggerButton={<Button className="bg-red-600">test</Button>}
          >
            test
          </ModalContainer>
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
        <CardDescription>test</CardDescription>
      </Card>
      <Card>
        <CardTitle>card title 8</CardTitle>
        <CardDescription>
          {" "}
          <ModalContainer>
            <AuthLayout />
          </ModalContainer>
        </CardDescription>
      </Card>
      <Card>
        <CardTitle>card title 9</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <Card>
        <CardTitle>card title 10</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <Card>
        <CardTitle>card title 11</CardTitle>
        <CardDescription>
          <Table>
            <TableRow>
              <TableCell>test</TableCell>
              <TableCell>test</TableCell>
              <TableCell>test</TableCell>
            </TableRow>
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
