import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginPage = () => {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col><h1>Login</h1></Col>
      </Row>
      <Row className="px-4 my-5">
        <Col sm={6}>
            <Form>
                <Form.Group>
                    <Form.Level>Email Addres</Form.Level>
                    <Form.Control type="email"  placeholder=' Enter Email'/>
                </Form.Group>
                <Form.Group>
                    <Form.Level>Password</Form.Level>
                    <Form.Control type="password"  placeholder=' Enter Password'/>
                </Form.Group>
                <Button variant ='primary' type='submit'>Login &gt;&gt;</Button>&nbsp;
            </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
