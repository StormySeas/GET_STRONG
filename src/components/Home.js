import React from 'react';
import { Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Home() {
  return (
    <Row>
      <Col xs={12}>
        <h1>GET_STRONG</h1>
        <p>Help yourself stay strong by tracking your progress!</p>
        <ButtonToolbar>
          <LinkContainer to="/signup">
            <Button bsStyle="primary">Sign Up</Button>
          </LinkContainer>
          <LinkContainer to="/login">
            <Button>Log In</Button>
          </LinkContainer>
        </ButtonToolbar>
      </Col>
    </Row>
  );
}

export default Home;