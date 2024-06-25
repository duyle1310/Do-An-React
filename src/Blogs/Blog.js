import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const BlogPost = ({ title, content, author, date, image }) => (
    <>
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{content}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">By {author} on {date}</Card.Subtitle>
                <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
    </>
);

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: 'First Post',
            content: 'This is the content of the first post.',
            author: 'John Doe',
            date: 'May 1, 2024',
            image: 'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/162757/Originals/iphone-15-pro-max-co-mau-hong-khong-1.jpg' // Link to the image for the first post
        },
        {
            id: 2,
            title: 'Second Post',
            content: 'This is the content of the second post.',
            author: 'Jane Smith',
            date: 'May 3, 2024',
            image: 'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/162757/Originals/iphone-15-pro-max-co-mau-hong-khong-8.jpg' // Link to the image for the second post
        }
    ];

    return (
        <Container>
            
        <h1> Blogs </h1>    
            <Row>
                {posts.map(post => (
                    <Col key={post.id} md={6} className="mb-4">
                        <BlogPost {...post} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Blog;
