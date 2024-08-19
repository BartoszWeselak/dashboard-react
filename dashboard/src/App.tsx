import React, { useState } from "react";
import "./App.css";
import { Card, CardDescription, CardTitle } from "./components/Card";
import { Modal } from "./components/Modal";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Sidebar, SidebarHeader } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { Avatar } from "./components/Avatar";
import { Logo } from "./components/Logo";

function App() {
  return (
    <div className="flex flex-row">
      <Sidebar>
        <SidebarHeader>
          <Logo src="https://picsum.photos/200" />
          <p>test</p>
          <Avatar src="https://picsum.photos/200" />
          <p>test</p>
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
