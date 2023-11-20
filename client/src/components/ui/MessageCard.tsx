import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import type { MessageType } from '../../types/message';
import { useAppDispatch } from '../../redux/hooks';
import { thunkDeleteMessage } from '../../redux/slices/messages/thunkActions';
import { setCurrentMessage } from '../../redux/slices/messages/messagesSlice';

type MessageCardProps = {
  message: MessageType;
};

export default function MessageCard({ message }: MessageCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{message.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{message.User.name}</Card.Subtitle>
        <Card.Text>{message.body}</Card.Text>
        <Button variant="secondary" onClick={() => dispatch(setCurrentMessage(message))}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => void dispatch(thunkDeleteMessage(message.id))}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
