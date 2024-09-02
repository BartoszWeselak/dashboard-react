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

import Notification from "../components/Notification";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex flex-row bg-gray-100">
      <Sidebar>
        <SidebarHeader>
          <Logo src="https://picsum.photos/200" />
        </SidebarHeader>
        <SidebarMain>
          <Link src="https://picsum.photos/200">
            <AvatarBox>
              <Avatar src="https://picsum.photos/200" />
              <p className="content-center">Your name here</p>
            </AvatarBox>
          </Link>
          <Dropdown>
            <DropdownItem src="https://picsum.photos/200">News</DropdownItem>
            <DropdownItem src="https://picsum.photos/200">Wallet</DropdownItem>
            <DropdownItem src="https://picsum.photos/200">
              Catalague
            </DropdownItem>
            <DropdownItem src="https://picsum.photos/200">Admin</DropdownItem>
          </Dropdown>
        </SidebarMain>
        <SidebarFooter>
          <p>footer</p>
        </SidebarFooter>
      </Sidebar>

      <div className="w-full ">
        <Notification>
          <p>test</p>
        </Notification>
        {children}
      </div>
    </div>
  );
};
