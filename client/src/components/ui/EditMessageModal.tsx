import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import AddMessageForm from './AddMessageForm';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { clearCurrentMessage } from '../../redux/slices/messages/messagesSlice';
import type { AddMesageFormData } from '../../types/message';
import { thunkEditMessage } from '../../redux/slices/messages/createAsyncThunks';

export default function EditMessageModal(): JSX.Element {
  const currentMessage = useAppSelector((store) => store.messagesSlice.currentMessage);
  const dispatch = useAppDispatch();
  return (
    <Modal show={!!currentMessage} onHide={() => dispatch(clearCurrentMessage())}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddMesageFormData;
            if (currentMessage) {
              dispatch(thunkEditMessage({ formData, id: currentMessage.id }))
                .catch(console.log)
                .finally(() => {
                  dispatch(clearCurrentMessage());
                  form.reset();
                });
            }

            // dispatch(thunkAddMessage(formData))
            // .catch(console.log)
            // .finally(() => {
            // form.reset();
            // });
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              defaultValue={currentMessage?.title}
              name="title"
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicBody">
            <Form.Label>Body</Form.Label>
            <Form.Control
              defaultValue={currentMessage?.body}
              name="body"
              type="text"
              as="textarea"
              rows={3}
              placeholder="Body"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
