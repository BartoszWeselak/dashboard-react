import React from "react";
import { Card, CardDescription } from "../../components/Card";

interface feedProps {
  children: React.ReactNode;
  src?: string;
}

export const Feed = ({ children }: feedProps) => {
  return (
    <Card size={"full"} className="">
      <CardDescription className=" p-8">{children}</CardDescription>
    </Card>
  );
};
