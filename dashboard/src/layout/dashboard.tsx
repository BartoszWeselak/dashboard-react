import React, { useState } from "react";
import { Sidebar, SidebarHeader } from "../components/Sidebar";
import { Logo } from "../components/Logo";
import { Avatar, AvatarBox } from "../components/Avatar";
import { Link } from "../components/Link";
import { Dropdown, DropdownItem } from "../components/Dropdown";
import { Divider } from "../components/Divider";
import { Card, CardDescription, CardTitle } from "../components/Card";
import ModalContainer from "../components/Modal";
import { Button } from "../components/Button";
import { Table, TableCell, TableRow } from "../components/Table";
import {
  AlertContainer,
  AlertDescription,
  AlertTitle,
} from "../components/Alert";
import { Input } from "../components/Input";

function Dashboard() {
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
        <p>test</p>

        <Divider />

        <p>test</p>
        <Divider />
        <div className="flex flex-wrap w-full gap-4 p-24">
          <Card className="bg-red-400 shadow-lg ring-1 ring-black/10">
            <CardTitle>card title 1</CardTitle>
            <CardDescription>card 1</CardDescription>
          </Card>
          <Card className="bg-blue-400">
            <CardTitle>card title 2</CardTitle>
            <CardDescription className="bg-red-400">
              <Input />
              <Button className="bg-sky-400">
                <p>test</p>
              </Button>
            </CardDescription>
          </Card>
          <Card className="bg-green-400">
            <CardTitle>card title 3</CardTitle>
            <CardDescription>
              <AlertContainer
                trigger={
                  <Button className="custom-button-styles">Alert</Button>
                }
              >
                <AlertTitle>test</AlertTitle>
                <AlertDescription>test</AlertDescription>
                <AlertDescription>test</AlertDescription>

                <AlertDescription>test</AlertDescription>
              </AlertContainer>
            </CardDescription>
          </Card>
          <Card className="bg-yellow-400">
            <CardTitle>card title 4</CardTitle>
            <CardDescription>
              <Table>
                <TableRow>
                  <TableCell>test</TableCell>
                  <TableCell>test</TableCell>
                  <TableCell>test</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>test</TableCell>
                  <TableCell>test</TableCell>
                  <TableCell>test</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>test</TableCell>

                  <TableCell>test</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>test</TableCell>
                </TableRow>
              </Table>
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>card title 5</CardTitle>
            <CardDescription>test</CardDescription>
          </Card>
          <Card>
            <CardTitle>card title 6</CardTitle>
            <CardDescription>test</CardDescription>
          </Card>
          <Card>
            <CardTitle>card title 7</CardTitle>
            <CardDescription>test</CardDescription>
          </Card>
          <Card>
            <CardTitle>card title 8</CardTitle>
            <CardDescription>
              {" "}
              <ModalContainer text="test2">test2 </ModalContainer>
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>card title 9</CardTitle>
            <CardDescription>
              <ModalContainer
                text="test"
                triggerButton={
                  <Button className="custom-button-styles">
                    Custom Open Modal
                  </Button>
                }
              >
                <p>test</p>
                <Divider />
              </ModalContainer>
            </CardDescription>
          </Card>
        </div>
        <Divider />
      </div>
    </div>
  );
}

export default Dashboard;
