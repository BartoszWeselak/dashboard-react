import React, { useState } from "react";
import { useAuth } from "../../hooks/auth-context";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";

interface LoginFormProps {
  onSucces: () => void;
}

export const LoginForm = ({ onSucces }: LoginFormProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleLogin = () => {
    login(username, email, password);
  };

  return (
    <>
      <Form>
        <h1>Login</h1>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeHolder="Enter username"
        />

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
      <br />
      <p>or</p>
      <Divider />
      <Form>
        <h1>Register</h1>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeHolder="Enter username"
        />

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
        <Button onClick={handleLogin}>Register</Button>
      </Form>
    </>
  );
};
