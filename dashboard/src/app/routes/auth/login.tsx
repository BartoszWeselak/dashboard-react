import React from "react";
import { useAuth } from "../../../hooks/auth-context";
import { AuthLayout } from "../../../layout/auth-layout";

export const LoginRoute = () => {
  const { user } = useAuth();

  return <AuthLayout></AuthLayout>;
};
