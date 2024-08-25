import React, { useState } from "react";
import { Sidebar, SidebarHeader } from "../components/Sidebar";
import { Logo } from "../components/Logo";
import { Avatar, AvatarBox } from "../components/Avatar";
import { Link } from "../components/Link";
import { Dropdown, DropdownItem } from "../components/Dropdown";
import { Divider } from "../components/Divider";
import { Tabs, Tab } from "../components/Tab";
import { Content } from "./content";
import {
  AlertContainer,
  AlertDescription,
  AlertTitle,
} from "../components/Alert";

export const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <Sidebar>
        <SidebarHeader>
          <Logo src="https://picsum.photos/200" />
          <Link src="https://picsum.photos/200">
            <AvatarBox>
              <Avatar src="https://picsum.photos/200" />
              <p className="content-center">Your name here</p>
            </AvatarBox>
          </Link>

          <Dropdown>
            <DropdownItem src="https://picsum.photos/200">Menu 1</DropdownItem>
            <DropdownItem src="https://picsum.photos/200">Menu 2</DropdownItem>
            <DropdownItem src="https://picsum.photos/200">Menu 3</DropdownItem>
            <DropdownItem src="https://picsum.photos/200">Menu 4</DropdownItem>
            <DropdownItem src="https://picsum.photos/200">Menu 5</DropdownItem>
            <DropdownItem src="https://picsum.photos/200">Menu 6</DropdownItem>
          </Dropdown>
        </SidebarHeader>
      </Sidebar>
      <div>
        <Divider />
        <AlertContainer>
          <AlertTitle>test</AlertTitle>
          <AlertDescription>test</AlertDescription>
        </AlertContainer>
        <Tabs defaultActiveTab={1}>
          <Divider />
          <Tab label="tab1">
            <Divider />
            <Content />
          </Tab>
          <Tab label="tab2">
            <Divider />
            <Content />
          </Tab>
          <Tab label="tab3">
            <Divider />
            <Content />
          </Tab>
          <Tab label="tab4">
            <Divider />
            <Content />
          </Tab>
        </Tabs>
        <Divider />
      </div>
    </div>
  );
};
