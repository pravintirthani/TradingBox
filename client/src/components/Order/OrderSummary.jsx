import React, { Component } from 'react';
import {connect}  from 'react-redux'
import * as OrderActions from './OrderAction'
import {bindActionCreators} from 'redux'
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);



export class OrderSummary extends Component {
  constructor(props){
    super(props)
    this.state = {};   
    this.dataPlotClick=this.dataPlotClick.bind(this);
    
  }
  componentWillMount(){    
    FusionCharts.addEventListener('dataplotClick', this.dataPlotClick);    
  }  

  // Event callback handler for 'dataplotRollOut'.
  // Resets to the original message.
  dataPlotClick(eventObj, dataObj) {
    this.props.orderDetailFromSummary(dataObj.categoryLabel,dataObj.displayValue,dataObj.datasetName);   
  }


  render() {
    if(this.props.state.OrderReducer.shareDetail!==""){
      let chartConfigs = this.props.state.OrderReducer.shareDetail;      
      return <ReactFC {...chartConfigs} />;          
      }
      return (<div>No Data</div>);       
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
  )(OrderSummary);