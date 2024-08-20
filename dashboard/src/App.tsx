import React, { useState } from "react";
import "./App.css";
import { Card, CardDescription, CardTitle } from "./components/Card";
import { Modal } from "./components/Modal";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Sidebar, SidebarHeader } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { Avatar, AvatarBox } from "./components/Avatar";
import { Logo } from "./components/Logo";
import { Link } from "./components/Link";
import { Dropdown, DropdownItem } from "./components/Dropdown";

function App() {
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
          </Dropdown>
        </SidebarHeader>
      </Sidebar>
      <div>
        <Navbar>
          <Card className="bg-blue-400 h-24 w-24">
            <CardTitle className="bg-yellow-400">test</CardTitle>
            <CardDescription className="bg-red-400">test</CardDescription>
          </Card>
          <Card className="bg-blue-400 h-24 w-24">
            <CardTitle className="bg-yellow-400">test</CardTitle>
            <CardDescription className="bg-red-400">test</CardDescription>
          </Card>
          <Card className="bg-blue-400 h-24 w-24">
            <CardTitle className="bg-yellow-400">test</CardTitle>
            <CardDescription className="bg-red-400">test</CardDescription>
          </Card>
          <Card className="bg-blue-400 h-24 w-24">
            <CardTitle className="bg-yellow-400">test</CardTitle>
            <CardDescription className="bg-red-400">test</CardDescription>
          </Card>
          <Card className="bg-blue-400 h-24 w-24">
            <CardTitle className="bg-yellow-400">test</CardTitle>
            <CardDescription className="bg-red-400">test</CardDescription>
          </Card>
          <Card className="bg-blue-400 h-24 w-24">
            <CardTitle className="bg-yellow-400">test</CardTitle>
            <CardDescription className="bg-red-400">test</CardDescription>
          </Card>
        </Navbar>
        <div className="flex flex-wrap w-full gap-4">
          <Card className="bg-red-400">
            <CardTitle>test</CardTitle>
            <CardDescription>test</CardDescription>
          </Card>
          <Card className="bg-blue-400">
            <CardTitle className="bg-yellow-400">tesfft</CardTitle>
            <CardDescription className="bg-red-400">
              <Input />
              <Button className="bg-sky-400">
                <p>test</p>
              </Button>
            </CardDescription>
          </Card>
          <Card className="bg-green-400">
            <CardTitle>test</CardTitle>
            <CardDescription>test</CardDescription>
          </Card>
          <Card className="bg-yellow-400">
            <CardTitle>test</CardTitle>
            <CardDescription>test</CardDescription>
          </Card>
          <Card>
            <CardTitle>test</CardTitle>
            <CardDescription>test</CardDescription>
          </Card>
          <Card>
            <CardTitle>test</CardTitle>
            <CardDescription>test</CardDescription>
          </Card>
          <Card>
            <CardTitle>test</CardTitle>
            <CardDescription>test</CardDescription>
          </Card>
          <Card>
            <CardTitle>test</CardTitle>
            <CardDescription>test</CardDescription>
          </Card>
          <Card>
            <CardTitle>test</CardTitle>
            <CardDescription>test</CardDescription>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
