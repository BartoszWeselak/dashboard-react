import React from "react";

import { Card, CardDescription, CardTitle } from "../../../components/Card";

import { DashboardLayout } from "../../../layout/dashboard-layout";
import { useAuth } from "../../../hooks/auth-context";

export const ProfileRoute = () => {
  const { user } = useAuth();
  return (
    <DashboardLayout>
      <Card size={"full"}>
        <CardDescription display={"row"}>
          <h1>Name:</h1>
          {user?.username}
          <h1>Email:</h1>
          {user?.email}
        </CardDescription>
      </Card>
    </DashboardLayout>
  );
};
