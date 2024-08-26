import React from "react";
import { Card, CardDescription, CardTitle } from "../components/Card";
import ModalContainer from "../components/Modal";
import { Button } from "../components/Button";
import { MockChart } from "../components/Chart";

export const ContentLayout = () => {
  return (
    <div className="flex flex-wrap w-full gap-4 p-24">
      <Card className="bg-red-400 shadow-lg ring-1 ring-black/10">
        <CardTitle>card title 1</CardTitle>
        <CardDescription>
          <ModalContainer
            triggerButton={<Button className="bg-red-600">test</Button>}
          >
            test
          </ModalContainer>
        </CardDescription>
      </Card>
      <Card className="bg-blue-400">
        <CardTitle>card title 2</CardTitle>
        <CardDescription className="bg-red-400">test</CardDescription>
      </Card>
      <Card className="bg-green-400">
        <CardTitle>card title 3</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <Card className="bg-yellow-400">
        <CardTitle>card title 4</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <Card className="bg-purple-400">
        <CardTitle>card title 5</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <Card className="bg-yellow-400">
        <CardTitle>card title 6</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <Card className="bg-green-400">
        <CardTitle>card title 7</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <Card className="bg-blue-400">
        <CardTitle>card title 8</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <Card className="bg-red-400">
        <CardTitle>card title 9</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <Card className="bg-red-400">
        <CardTitle>card title 10</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <Card className="bg-red-400">
        <CardTitle>card title 11</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <Card className="bg-red-400">
        <CardTitle>card title 12</CardTitle>
        <CardDescription>test</CardDescription>
      </Card>
      <MockChart></MockChart>
    </div>
  );
};
