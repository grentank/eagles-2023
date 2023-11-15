import React from 'react';
import Card from 'react-bootstrap/Card';
import type { MessageType } from '../../types/message';

type MessageCardProps = {
  message: MessageType;
};

export default function MessageCard({ message }: MessageCardProps): JSX.Element {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{message.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{message.User.name}</Card.Subtitle>
        <Card.Text>{message.body}</Card.Text>
        <Card.Link href="#">More</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
      </Card.Body>
    </Card>
  );
}
