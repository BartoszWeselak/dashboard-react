import React from "react";
import { useAuth } from "../../../hooks/auth-context";
import { AuthLayout } from "../../../layout/auth-layout";
import { LoginForm } from "../../../features/auth/login-form";
import { RegisterForm } from "../../../features/auth/register-form";
import { Divider } from "../../../components/Divider";
import { useNavigate } from "react-router-dom";

export const LoginRoute = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/dashboard");
  };

  return (
    <AuthLayout>
      <LoginForm onSucces={handleSuccess} />
      <Divider />
      <h1>or</h1>
      <Divider />
      <RegisterForm onSucces={handleSuccess} />
    </AuthLayout>
  );
};
