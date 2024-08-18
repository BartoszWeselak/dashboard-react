import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card, CardDescription, CardTitle } from "./components/Card";
import { Modal } from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Card className="bg-blue-500 text-black">
        <CardTitle>
          <h1>test2</h1>
        </CardTitle>
        <CardDescription>
          <p>test</p>
        </CardDescription>
      </Card>

      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-lg font-bold">test</h2>
        <p>test</p>
      </Modal>
    </div>
  );
}

export default App;
