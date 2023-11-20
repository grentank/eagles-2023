import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import type { AddMesageFormData } from '../../types/message';
import { useAppDispatch } from '../../redux/hooks';
import { thunkAddMessage } from '../../redux/slices/messages/thunkActions';
import { addMessage } from '../../redux/slices/messages/messagesSlice';
import { thunkSendMessage } from '../../redux/slices/messages/createAsyncThunks';

type AddMessageFormProps = {
  handleClose: () => void;
};

export default function AddMessageForm({ handleClose }: AddMessageFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddMesageFormData;
        // dispatch(thunkAddMessage(formData))
        dispatch(thunkSendMessage(formData))
          .catch(console.log)
          .finally(() => {
            form.reset();
            handleClose();
          });
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control name="title" type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBody">
        <Form.Label>Body</Form.Label>
        <Form.Control name="body" type="text" as="textarea" rows={3} placeholder="Body" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
