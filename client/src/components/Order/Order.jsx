import React, { Component } from 'react';
import {connect}  from 'react-redux'
import * as OrderActions from './OrderAction'
import {bindActionCreators} from 'redux'
import {Row,Col} from 'react-bootstrap';
import OrderForm from './OrderForm';
import OrderLog from './OrderLog';

export class Order extends Component {
  constructor(props){
    super(props)
    this.state = {};   
  }
  componentWillMount(){        
  }  
  render() {      
    return (
      <React.Fragment>
      <Row className="margin-0">
        <Col md="6" className="order-form-component">
          <OrderForm />   
        </Col>      
        <Col md="6" className="order-form-component">
          <OrderLog />   
        </Col>
      </Row>  
      </React.Fragment>
    );
  }
}
function mapStateToProps(state){  
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(OrderActions, dispatch)    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Order);