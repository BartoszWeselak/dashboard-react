import React, { useState } from "react";
import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMain,
} from "../components/Sidebar";
import { Logo } from "../components/Logo";
import { Avatar, AvatarBox } from "../components/Avatar";
import { Link } from "../components/Link";
import { Dropdown, DropdownItem } from "../components/Dropdown";
import { NotificationBar, Notification } from "../components/Notification";
import { useAuth } from "../hooks/auth-context";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Card, CardDescription, CardTitle } from "../components/Card";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user, avatarUrl, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex flex-row bg-gray-100">
      <Sidebar>
        <SidebarHeader>
          <Logo src="/logo.png" />
        </SidebarHeader>
        <SidebarMain>
          {user ? (
            <Link src="/profile">
              <AvatarBox>
                <Avatar src={avatarUrl} />
                <p className="content-center">{user.username}</p>
              </AvatarBox>
            </Link>
          ) : (
            <Link src="/auth/login">
              <AvatarBox>
                <Avatar src="/avatar.png" />
                <p className="content-center">Please log in</p>
              </AvatarBox>
            </Link>
          )}
          <Dropdown>
            <DropdownItem src="/wallet">Wallet</DropdownItem>
            <DropdownItem src="/dashboard">Catalague</DropdownItem>
            {user ? (
              <DropdownItem>
                <Button
                  variant={"danger"}
                  className="rounded-xl"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </DropdownItem>
            ) : (
              <></>
            )}
          </Dropdown>
        </SidebarMain>
        <SidebarFooter>
          <p></p>
        </SidebarFooter>
      </Sidebar>

      <div className="w-full ">
        <NotificationBar>
          <Notification>
            <Card size={"wide"}>
              <CardTitle>
                {" "}
                <Link src="/info/5">New Offer</Link>
              </CardTitle>
            </Card>
          </Notification>
        </NotificationBar>
        {children}
      </div>
    </div>
  );
};
