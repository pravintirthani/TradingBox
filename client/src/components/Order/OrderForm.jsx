import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as OrderActions from './OrderAction'
import { bindActionCreators } from 'redux'
import OrderDetail from './OrderDetail'
import OrderSummary from './OrderSummary'
import { Row,Col,Button, Form} from 'react-bootstrap';  
import * as Constant from '../AppConstant';
import Input from './Input';
export class OrderForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ticker:"",
            trader:"",
            price:"",
            share:"",
            order:"",
            orderPrice:"",
            orderShares:"",
            orderType:""
        };
        this.order=this.order.bind(this);
        this.onChangeTraders=this.onChangeTraders.bind(this);
        this.onChangePrice=this.onChangePrice.bind(this);
        this.onChangeShare=this.onChangeShare.bind(this);
        this.onChangeOrder=this.onChangeOrder.bind(this);
        this.onChangeTicker=this.onChangeTicker.bind(this);
        this.orderDetailFromSummary=this.orderDetailFromSummary.bind(this);
    }
    componentWillMount() {
        this.props.actions.getTickerList();
    }
    componentWillUpdate(){
        if(this.state.ticker==="" && this.props.state.OrderReducer.tickerList.length>0){
            this.setState({ticker:this.props.state.OrderReducer.tickerList[0].name});
            this.props.actions.getShareDetailByTicker({ticker:this.props.state.OrderReducer.tickerList[0].name});
        }
        // if(this.props.state.OrderReducer.addOrderStatus!=="" && this.props.state.OrderReducer.addOrderStatus==="Success"){      
        //     this.props.actions.getShareDetailByTicker({ticker:this.state.ticker});            
        //     if(this.state.orderPrice!=="" && this.state.orderType!=""){
        //         this.props.actions.getShareDetailByTickerAndPriceAndOrderType({ticker:this.state.ticker,price:this.state.orderPrice,orderType:this.state.orderType})
        //     }
        //     this.props.state.OrderReducer.addOrderStatus="";
        // }
    }
    onChangeTraders(val){
        this.setState({trader:val});
    }
    onChangePrice(val){
        this.setState({price:val});
    }
    onChangeShare(val){
        this.setState({share:val});
    }
    onChangeOrder(val){
        this.setState({order:val});
    }
    onChangeTicker(e){        
        this.setState({ticker:e.target.value,orderPrice:"",orderType:""});
        this.props.actions.getShareDetailByTicker({ticker:e.target.value});
    }
    order(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.actions.addOrder({
            trader:this.state.trader,
            price:this.state.price,
            share:this.state.share,
            ticker:this.state.ticker,
            orderType:this.state.order,
            orderDate:new Date()
        },this.state.orderPrice,this.state.orderType)
      }
    orderDetailFromSummary(orderPrice,orderShares,orderType){    
        this.setState({orderPrice:orderPrice,orderType:orderType})        
        this.props.actions.getShareDetailByTickerAndPriceAndOrderType({ticker:this.state.ticker,price:orderPrice,orderType:orderType})
      }  
    render() {    
        return (
            <React.Fragment>
                <Row className="margin-0">
                    <Col md="5">
                        <Form onSubmit={e => this.order(e)}>
                        {this.props.state.OrderReducer.tickerList!=="" && this.props.state.OrderReducer.tickerList.length>0 ?
                            <Row className="margin-0 padding-top-3">
                                <Col md={4}>{Constant.getSFSXFieldText}</Col>
                                <Col md={8}>
                                    <select onChange={this.onChangeTicker} value={this.state.ticker}>
                                    {
                                        this.props.state.OrderReducer.tickerList.map((v,k)=>{
                                            return(
                                                <option value={v.name} key={k}>{v.name}</option>
                                            );
                                        })
                                    }
                                    </select>
                                </Col>
                            </Row>
                        :null
                        }                        
                        
                        <Input displayName={Constant.getTraderFieldText} textBoxType="text" value={this.state.trader} changeTextBoxValue={this.onChangeTraders} required={true}  />                                
                                                    
                        <Input displayName={Constant.getPriceFieldText} textBoxType="number" value={this.state.price} changeTextBoxValue={this.onChangePrice} required={true}  />                           
                    
                        <Input displayName={Constant.getShareFieldText} textBoxType="number" value={this.state.share} changeTextBoxValue={this.onChangeShare} required={true}  />                           
                    
                        <Input displayNames={[Constant.getBuyFieldText,Constant.getSellFieldText]} checked={this.state.order} name="Order" textBoxType="radio"  changeTextBoxValue={this.onChangeOrder} required={true}  />
                       
                        <Row>
                            <Col md={12} >
                                <Button type="reset" className="margin-1" type="reset" variant="secondary" name="cancel">Cancel</Button>
                                <Button type="submit" className="margin-1" type="submit" variant="primary" name="submit">Add Order</Button>
                            </Col>
                        </Row>
                    </Form>    
                </Col>               
                <Col md="7" className="text-left">
                    <OrderSummary orderDetailFromSummary={this.orderDetailFromSummary}/>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <OrderDetail 
                        price={this.state.orderPrice}                         
                        orderType={this.state.orderType} />
                </Col>
            </Row>    
        </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(OrderActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderForm);