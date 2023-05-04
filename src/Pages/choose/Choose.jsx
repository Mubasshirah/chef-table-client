import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import food from '../../assets/food.jpg';
import food1 from '../../assets/food1.jpeg';
import food2 from '../../assets/food2.jpg'
import { Container, Image } from 'react-bootstrap';

const Choose = () => {
    return (
        <Container className='my-5'>
            <h1 className=' text-center'>Our Speciality</h1>
            <hr className='w-25 mx-auto' />
            <Row xs={1} md={2} lg={3} className="g-4">
      
        <Col >
          <Card className='text-center p-3 bg-dark text-white my-5'>
            <Image variant="top" src={food} className='img-fluid w-50 h-50 mx-auto' roundedCircle />
            <Card.Body>
              <Card.Title>Quality Food</Card.Title>
              <Card.Text>
              We ensure quality food at lower cost with fast delivery.We don't compromise with our ethics.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card className='text-center p-3 bg-dark text-white my-5'>
            <Image variant="top" src={food1} className='img-fluid w-50 h-50 mx-auto' roundedCircle />
            <Card.Body>
              <Card.Title>Super Taste</Card.Title>
              <Card.Text>
              We ensure quality food at lower cost with fast delivery.We don't compromise with our ethics.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card className='text-center p-3 bg-dark text-white my-5'>
            <Image variant="top" src={food2} className='img-fluid w-50 h-50 mx-auto' roundedCircle />
            <Card.Body>
              <Card.Title>Fast Delivary</Card.Title>
              <Card.Text>
               We ensure quality food at lower cost with fast delivery.We don't compromise with our ethics.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
    </Row>
        </Container>
    );
};

export default Choose;