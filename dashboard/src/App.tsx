import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card, CardDescription, CardTitle } from "./components/Card";
import { Modal } from "./components/Modal";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Sidebar } from "./components/Sidebar";
import { LoginModal } from "./components/LoginModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Sidebar>
        <p>g</p>
      </Sidebar>
      <div className="flex flex-wrap justify-center gap-4">
        <LoginModal />
        <Card>
          <CardTitle>
            <p>test</p>
          </CardTitle>
          <CardDescription>
            <p>test</p>
          </CardDescription>
        </Card>
        <Card>
          <CardTitle>
            <p>test</p>
          </CardTitle>
          <CardDescription>
            <p>test</p>
          </CardDescription>
        </Card>
        <Card>
          <CardTitle>
            <p>test</p>
          </CardTitle>
          <CardDescription>
            <p>test</p>
          </CardDescription>
        </Card>
        <Card>
          <CardTitle>
            <p>test</p>
          </CardTitle>
          <CardDescription>
            <p>test</p>
          </CardDescription>
        </Card>
        <Card>
          <CardTitle>
            <p>test</p>
          </CardTitle>
          <CardDescription>
            <p>test</p>
          </CardDescription>
        </Card>
      </div>
    </div>
  );
}

export default App;
