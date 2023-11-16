import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddMessageForm from './AddMessageForm';

type AddMessageModalProps = {
  show: boolean;
  handleClose: () => void;
};

export default function AddMessageModal({ show, handleClose }: AddMessageModalProps): JSX.Element {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddMessageForm handleClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
}
