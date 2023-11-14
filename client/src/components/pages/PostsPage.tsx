import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import type { PostType } from '../../types/post';
import PostCard from '../ui/PostCard';

export default function PostsPage(): JSX.Element {
  const posts: PostType[] = [];
  return (
    <Container>
      <Row>
        {posts.map((post) => (
          <Col xs={4} key={post.id}>
            <PostCard post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
