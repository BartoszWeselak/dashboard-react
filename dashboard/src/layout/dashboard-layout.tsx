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
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import SessionComponent from "../features/auth/Session";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-row bg-gray-100">
      <Sidebar>
        <SidebarHeader>
          <Logo src="https://picsum.photos/200" />
        </SidebarHeader>
        <SidebarMain>
          {user ? (
            <Link src="https://picsum.photos/200">
              <AvatarBox>
                <Avatar src="https://picsum.photos/200" />
                <p className="content-center">{user.username}</p>
              </AvatarBox>
            </Link>
          ) : (
            <Link src="">
              <AvatarBox>
                <Avatar src="https://picsum.photos/200" />
                <p className="content-center">Please log in</p>
              </AvatarBox>
            </Link>
          )}
          <Dropdown>
            <DropdownItem src="https://picsum.photos/200">News</DropdownItem>
            <DropdownItem src="https://picsum.photos/200">Wallet</DropdownItem>
            <DropdownItem src="https://picsum.photos/200">
              Catalague
            </DropdownItem>
            <DropdownItem src="https://picsum.photos/200">Admin</DropdownItem>
            {user ? (
              <DropdownItem src="https://picsum.photos/200">
                <Button onClick={logout}>Logout</Button>
              </DropdownItem>
            ) : (
              <></>
            )}
          </Dropdown>
        </SidebarMain>
        <SidebarFooter>
          <p>footer</p>
        </SidebarFooter>
      </Sidebar>

      <div className="w-full ">
        <NotificationBar>
          <Notification>test</Notification>
          <Notification>test</Notification>
        </NotificationBar>
        {children}
      </div>
    </div>
  );
};
