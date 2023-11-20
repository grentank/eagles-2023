import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MessageCard from '../ui/MessageCard';
import { useAppSelector } from '../../redux/hooks';
import EditMessageModal from '../ui/EditMessageModal';

export default function MessagesPage(): JSX.Element {
  const messages = useAppSelector((store) => store.messagesSlice.messages);
  return (
    <Container>
      <Row>
        {messages.map((message) => (
          <Col xs={4} key={message.id}>
            <MessageCard message={message} />
          </Col>
        ))}
      </Row>
      <EditMessageModal />
    </Container>
  );
}
