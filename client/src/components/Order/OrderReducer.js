import * as actionType from '../../Constant'
import * as appConstant from '../AppConstant';
import moment from 'moment';
let intialState={
  tickerList:"",
  shareDetail:"",
  orderHistoryDetail:[],
  orderShareDetail:[],
  addOrderStatus:""
}
// let defaultTickerList=[
//   {id:1,name:'GOOG'},
//   {id:2,name:'FB'},
//   {id:3,name:'ORCL'},
//   {id:4,name:'ZGRO'}
// ]

// let defaultOrderHistory=[
//   {id:1,orderDate:"2019-08-01 01:02:00",ticker:"GOOG",share:"10",price:"100",orderType:"buy"},
//   {id:2,orderDate:"2019-08-01 03:04:00",ticker:"GOOG",share:"10",price:"100",orderType:"sell"},
//   {id:3,orderDate:"2019-08-02 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"buy"},
//   {id:4,orderDate:"2019-08-03 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"sell"},
//   {id:5,orderDate:"2019-08-03 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"buy"},
//   {id:6,orderDate:"2019-08-04 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"buy"},
//   {id:7,orderDate:"2019-08-04 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"sell"},
//   {id:8,orderDate:"2019-08-05 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"buy"},
//   {id:9,orderDate:"2019-08-05 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"sell"},
//   {id:10,orderDate:"2019-08-06 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"buy"},
//   {id:11,orderDate:"2019-08-06 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"buy"},
//   {id:12,orderDate:"2019-08-07 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"sell"},
//   {id:13,orderDate:"2019-08-07 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"buy"},
//   {id:14,orderDate:"2019-08-08 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"sell"},
//   {id:15,orderDate:"2019-08-08 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"buy"},
//   {id:16,orderDate:"2019-08-09 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"buy"},
//   {id:17,orderDate:"2019-08-09 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"sell"},
//   {id:18,orderDate:"2019-08-10 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"buy"},
//   {id:19,orderDate:"2019-08-11 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"sell"},
//   {id:20,orderDate:"2019-08-12 12:00:00",ticker:"GOOG",share:"10",price:"100",orderType:"buy"}    
// ]
export function OrderReducer(newState = intialState, action){
  let response="";
  switch (action.type) {
    case actionType.getTickerList:
        // return Object.assign({}, newState, {      
        //   tickerList: defaultTickerList
        // });
      response=action.responseData;      
      if(response.Status===appConstant.successStatus){
        return Object.assign({}, newState, {      
          tickerList: response.data
        });
      }      
      return newState
    case actionType.getShareDetailByTicker:
        // return Object.assign({}, newState, {      
        //   // tickerList: defaultTickerList
        // });
      response=action.responseData;      
      if(response.Status===appConstant.successStatus){
        let data={
          type: 'msstackedcolumn2d',// The chart type
          width: '450', // Width of the chart
          height: '300', // Height of the chart
          dataFormat: 'json', // Data type
          "events": {
            // Attach to beforeInitialize
            "beforeLinkedItemOpen": function(eventObj, dataObj) { 
               this.props.dataplotrollout(dataObj)
            }
        } ,
          dataSource:response.data
        }
        return Object.assign({}, newState, {      
          shareDetail:data
        });
      }else{
        return Object.assign({}, newState, {      
          shareDetail:""
        });
      }
    case actionType.addOrder:
        // var orders=[];
        // orders.push(action.responseData);
        // newState.orderHistoryDetail.map((v,k)=>{
        //   orders.push(v);
        // })
        // orders.push(newState.orderHistoryDetail);
        // return Object.assign({}, newState, {      
        //   orderHistoryDetail:orders
        // });
      response=action.responseData;      
      if(response.Status===appConstant.successStatus){        
        var orders=[];
        response.data.orderDate=moment(response.data.orderDate).format("YYYY-MM-DD hh:mm:ss")
        orders.push(response.data);
        newState.orderHistoryDetail.forEach((v,k)=>{
          orders.push(v);          
        })
        return Object.assign({}, newState, {      
            orderHistoryDetail:orders,addOrderStatus:response.Status
          });
      }      
      return newState  
    case actionType.getOrderHistory:
        // return Object.assign({}, newState, {      
        //   orderHistoryDetail: defaultOrderHistory
        // });
      response=action.responseData;      
      if(response.Status===appConstant.successStatus){
        return Object.assign({}, newState, {      
          orderHistoryDetail: response.data
        });
      }      
      return newState
    case actionType.getShareDetailByTickerAndPriceAndOrderType:
        // return Object.assign({}, newState, {      
        //   orderHistoryDetail: defaultOrderHistory
        // });
      response=action.responseData;      
      if(response.Status===appConstant.successStatus){
        return Object.assign({}, newState, {      
          orderShareDetail: response.data
        });
      }      
      return newState




      default:
        return newState
    }
  
}

export default OrderReducer;