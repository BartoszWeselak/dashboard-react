import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card, CardDescription, CardTitle } from "./components/Card";
import { Modal } from "./components/Modal";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Sidebar } from "./components/Sidebar";
import { LoginModal } from "./components/LoginModal";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-row">
      <Sidebar>
        <p>sidebar</p>
      </Sidebar>
      <div className="flex flex-wrap w-full ">
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
  );
}

export default App;
