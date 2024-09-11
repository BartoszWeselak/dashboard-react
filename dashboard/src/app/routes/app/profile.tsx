import React from "react";

import { Card, CardDescription, CardTitle } from "../../../components/Card";
import { useNavigate } from "react-router-dom";

import { DashboardLayout } from "../../../layout/dashboard-layout";
import { useAuth } from "../../../hooks/auth-context";
import { ChangeForm } from "../../../features/auth/change-form";

export const ProfileRoute = () => {
  const navigate = useNavigate();

  const { user } = useAuth();
  const handleSuccess = () => {
    console.log("succes");
  };

  return (
    <DashboardLayout>
      <Card size={"full"}>
        <CardDescription display={"row"}>
          <h1>Name:</h1>
          {user?.username}
          <h1>Email:</h1>
          {user?.email}
          <ChangeForm onSucces={handleSuccess} />
        </CardDescription>
      </Card>
    </DashboardLayout>
  );
};
