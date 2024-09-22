import React from "react";

import { Card, CardDescription, CardTitle } from "../../../components/Card";
import { useNavigate } from "react-router-dom";

import { DashboardLayout } from "../../../layout/dashboard-layout";
import { useAuth } from "../../../hooks/auth-context";
import { ChangeForm } from "../../../features/auth/change-form";
import { Image } from "../../../components/Image";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import FileUpload from "../../../components/Fileupload";
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
      <Card size={"full"}>
        <CardDescription display={"row"}>
          <FileUpload handleAvatarChange={handleAvatarChange} />
          {user?.avatar && (
            <>
              <Image src={user.avatar} size={"small"} />
              <Button onClick={clearAvatar}>Remove Avatar</Button>
            </>
          )}
        </CardDescription>
      </Card>
    </DashboardLayout>
  );
};
