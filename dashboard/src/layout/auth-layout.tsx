import React from "react";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Divider } from "../components/Divider";

export const AuthLayout = () => {
  return (
    <div>
      <LoginLayout />
      <Divider />
      <p>if u don't have an account:</p>
      <Divider />
      <RegisterLayout />
    </div>
  );
};

const RegisterLayout = () => {
  return (
    <div className="flex-col text-center gap-4 ">
      <p>Email</p>
      <Input className="w-1/3" />

      <p>Password</p>
      <Input className="w-1/3" />
      <p>Repeat Password</p>
      <Input className="w-1/3" />
      <p></p>

      <Button className="bg-slate-500 w-1/3">test</Button>
    </div>
  );
};

const LoginLayout = () => {
  return (
    <div className="flex-col text-center gap-4 ">
      <p>Email</p>
      <Input className="w-1/3" />

      <p>Password</p>
      <Input className="w-1/3" />
      <p></p>
      <Button className="bg-slate-500 w-1/3">test</Button>
    </div>
  );
};
