import { useState } from "react";
import { useAuth } from "../../hooks/auth-context";
import { Form } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

interface ChangeFormProps {
  onSucces: () => void;
}

export const ChangeForm = ({ onSucces }: ChangeFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { change } = useAuth();

  const handleRegister = () => {
    const isChangeSuccessful = change(username, email, password);

    if (isChangeSuccessful) {
      onSucces();
    }
  };

  return (
    <>
      <Form className="flex flex-col gap-4">
        <h1>Change credentials: </h1>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeHolder="Enter new username:"
        />

        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeHolder="Enter new email:"
        />

        <Input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeHolder="Enter new password:"
        />
        <Button onClick={handleRegister} variant={"danger"}>
          Update credentials
        </Button>
      </Form>
    </>
  );
};
