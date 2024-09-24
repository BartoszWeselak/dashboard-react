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
import { Modal } from "../../../components/Modal";
import { Divider } from "../../../components/Divider";
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
        <CardDescription display={"col"} margins={"small"}>
          <CardDescription margins={"small"}>
            {user?.avatar && (
              <>
                <Image src={user.avatar} size={"medium"} />
              </>
            )}
            <Modal
              triggerButton={
                <Button variant={"buy"} widths={"large"}>
                  Edit Avatar
                </Button>
              }
            >
              {user?.avatar && (
                <>
                  <Image src={user.avatar} size={"medium"} />
                  <Button onClick={clearAvatar} widths={"large"}>
                    Remove Avatar
                  </Button>
                </>
              )}
              <FileUpload handleAvatarChange={handleAvatarChange} />
            </Modal>
          </CardDescription>
          <CardDescription margins={"small"} display={"row"}>
            <h1>Username:</h1>
            {user?.username}
            <h1>Email:</h1>
            {user?.email}
            <Divider />
            <ChangeForm onSucces={handleSuccess} />
          </CardDescription>
        </CardDescription>
      </Card>
    </DashboardLayout>
  );
};
