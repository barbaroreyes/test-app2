import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


const Home = () => {
  return (
    <Container>
         <Row className="px-4 my-5">
        <Col xs={4} sm={6}>
            <Image 
            src='/img/logo.jpg'
            />
        </Col>
        <Col sm={6}>
           <h1 className="font-weight-light">Test1_App</h1>
           <p className="mt-4">
            Description
            <br/><br/>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quos harum placeat culpa rerum et eum, numquam consequuntur error nesciunt earum id autem commodi cum perferendis exercitationem facere dignissimos voluptatibus laborum! Laborum dolore quasi sequi eius enim aperiam nostrum voluptate doloremque omnis officiis tempora nulla, aliquid harum consectetur, quibusdam commodi ex doloribus voluptates. Eligendi, tempora ex rem fugiat quaerat eum officiis, veritatis, dignissimos ut reiciendis minima facere repellendus. Magnam, libero porro perspiciatis quam quas error suscipit veritatis excepturi magni dolorem fugiat adipisci reiciendis nulla quis dolore provident fuga 
            repudiandae nostrum dolorum dolores atque reprehenderit
             ipsa maxime. Eum in nulla dolorum.
             
             </p>
             <Button variant ='outline-primary'>Get Started &gt;&gt;</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
