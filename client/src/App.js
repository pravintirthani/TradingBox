import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col,Container } from 'react-bootstrap';
import Header from './components/Header/Header'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };

  }
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col md={12}>
              <Header />
            </Col>
          </Row>
          <Row className="margin-0">
            <Col md={12}>
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }

}

export default App;
