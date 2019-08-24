import React, { Component } from 'react';
import {connect}  from 'react-redux'
import * as OrderActions from './OrderAction'
import {bindActionCreators} from 'redux'
import {Row,Col} from 'react-bootstrap';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table'
import moment from 'moment';

export class OrderLog extends Component {
  constructor(props){
    super(props)
    this.state = {};   
    this.orderDateFormatter=this.orderDateFormatter.bind(this);
  }
  componentWillMount(){    
    this.props.actions.getOrderHistory();
  }  
  orderDateFormatter(cell,row){    
    return moment(row.orderDate).format("YYYY-MM-DD hh:mm:ss");
  }
  render() {      
    return (
      <React.Fragment>
        <Row>
        <Col md={12} className="text-center">
           <h3>Trading Logs</h3>
        </Col>
        </Row>
      <Row>
        <Col md={12}>
          <BootstrapTable data={this.props.state.OrderReducer.orderHistoryDetail} striped hover  pagination={true}>
              <TableHeaderColumn  hidden={true} isKey dataField='id'>Product ID</TableHeaderColumn>
              <TableHeaderColumn dataField='orderDate' dataFormat={ this.orderDateFormatter } >Time Stamp</TableHeaderColumn>
              <TableHeaderColumn dataField='ticker'>Ticker</TableHeaderColumn>
              <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
              <TableHeaderColumn dataField='share'>Share</TableHeaderColumn>
          </BootstrapTable>
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
  )(OrderLog);