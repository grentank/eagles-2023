import React from 'react';
import Card from 'react-bootstrap/Card';
import type { PostType } from '../../types/post';

type PostCardProps = {
  post: PostType;
};

export default function PostCard({ post }: PostCardProps): JSX.Element {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{post.User.name}</Card.Subtitle>
        <Card.Text>{post.body}</Card.Text>
        <Card.Link href="#">More</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
      </Card.Body>
    </Card>
  );
}
