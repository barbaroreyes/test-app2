import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegistrerPage = () => {
  return (
    <Container>
    <Row className="px-4 my-5">
      <Col><h1>Login</h1></Col>
    </Row>
    <Row className="px-4 my-5">
      <Col sm={6}>
          <Form>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Level >Email Addres</Form.Level>
                  <Form.Control type="email"  placeholder=' Enter Email'/>
                  <Form.Text>
                    We'll never share your email
                  </Form.Text>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formPassword'>
                  <Form.Level>Password</Form.Level>
                  <Form.Control type="password" minLength="8" placeholder=' Enter Password'/>
                 
              </Form.Group>
              <Form.Group className='mb-3' controlId='formConfirm'>
                  <Form.Level>Password</Form.Level>
                  <Form.Control type="password" minLength="8"   placeholder=' Confirm Password'/>
              </Form.Group>
              <Button variant ='primary' type='submit'>Register &gt;&gt;</Button>&nbsp;
          </Form>
      </Col>
    </Row>
  </Container>
  );
}

export default RegistrerPage;

