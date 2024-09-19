import React from "react";

import { Card, CardDescription, CardTitle } from "../../../components/Card";
import { useNavigate } from "react-router-dom";

import { DashboardLayout } from "../../../layout/dashboard-layout";
import { useAuth } from "../../../hooks/auth-context";
import { ChangeForm } from "../../../features/auth/change-form";

export const ProfileRoute = () => {
  const navigate = useNavigate();

  const { user, setAvatar, clearAvatar } = useAuth();
  const handleSuccess = () => {
    console.log("succes");
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
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
      <div>
        <input type="file" accept="image/png" onChange={handleAvatarChange} />
        {user?.avatar && (
          <div>
            <img src={user.avatar} alt="User Avatar" />
            <button onClick={clearAvatar}>Remove Avatar</button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};
