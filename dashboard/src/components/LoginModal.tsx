import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { Card, CardDescription, CardTitle } from "./Card";

interface ModalProps {
  className?: string;
}
export function LoginModal({ className }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Button
        onClick={openModal}
        className="fixed top-4 right-4 z-50 p-2 bg-blue-500 text-white rounded"
      >
        Open Modal
      </Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <Card>
          <CardTitle>
            <p>test</p>
          </CardTitle>
          <CardDescription>
            <p>test</p>
          </CardDescription>
        </Card>
      </Modal>
    </>
  );
}
