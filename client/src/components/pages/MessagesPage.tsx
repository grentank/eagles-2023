import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import type { MessageType } from '../../types/message';
import MessageCard from '../ui/MessageCard';

export default function MessagesPage(): JSX.Element {
  const messages: MessageType[] = [];
  return (
    <Container>
      <Row>
        {messages.map((message) => (
          <Col xs={4} key={message.id}>
            <MessageCard message={message} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
