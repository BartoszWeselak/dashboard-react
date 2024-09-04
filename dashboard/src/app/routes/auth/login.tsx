import React from "react";
import { useAuth } from "../../../hooks/auth-context";
import { AuthLayout } from "../../../layout/auth-layout";
import { LoginForm } from "../../../features/auth/login-form";

export const LoginRoute = () => {
  const { user } = useAuth();

  return (
    <AuthLayout>
      <LoginForm
        onSucces={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></LoginForm>
    </AuthLayout>
  );
};
