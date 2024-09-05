import React, { useState } from "react";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";
import { useAuth } from "../../hooks/auth-context";

interface LoginFormProps {
  onSucces: () => void;
}

export const LoginForm = ({ onSucces }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleLogin = () => {
    const isLoginSuccessful = login(email, password);

    if (isLoginSuccessful) {
      onSucces();
    }
  };

  return (
    <>
      <Form className="flex flex-col gap-4">
        <h1>Login</h1>
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeHolder="Enter email"
        />
        <Input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeHolder="Enter password"
        />
        <Button onClick={handleLogin}>Login</Button>
      </Form>
    </>
  );
};
