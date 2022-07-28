import Form from "./Form";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuth } from "../context/AuthContext";

export default function FormModal() {
  
  const {  statusModalLinks, setShowFormModal, setHideFormModal } = useAuth()
 
  return (
    <>
      <Modal show={statusModalLinks} onHide={setHideFormModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={setHideFormModal}>
            Close
          </Button>
          <Button variant="primary" onClick={setHideFormModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
} 