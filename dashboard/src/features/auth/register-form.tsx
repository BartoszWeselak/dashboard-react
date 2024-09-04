import React, { useState } from "react";
import { useAuth } from "../../hooks/auth-context";
import { Form } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

interface RegisterFormProps {
  onSucces: () => void;
}

export const RegisterForm = ({ onSucces }: RegisterFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { register } = useAuth();

  const handleRegister = () => {
    register(username, email, password);
  };

  return (
    <>
      <Form className="flex flex-col gap-4">
        <h1>register</h1>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeHolder="Enter username:"
        />

        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeHolder="Enter email:"
        />

        <Input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeHolder="Enter password:"
        />
        <Button onClick={handleRegister}>Register</Button>
      </Form>
    </>
  );
};
