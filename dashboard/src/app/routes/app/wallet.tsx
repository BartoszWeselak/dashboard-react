import React from "react";

import { Card, CardDescription, CardTitle } from "../../../components/Card";

import { DashboardLayout } from "../../../layout/dashboard-layout";
import { useAuth } from "../../../hooks/auth-context";

export const WalletRoute = () => {
  const { user } = useAuth();
  return (
    <DashboardLayout>
      <Card>
        <CardDescription>{user?.username}</CardDescription>
      </Card>
    </DashboardLayout>
  );
};
