import * as action from '../../Constant.js';
import {async} from '../../api/index.js';

export function getTickerList(data={}){  
  // data.action=action.getTickerList;    
  // return dispatch=>{ dispatch({type: action.getTickerList,responseData:data}) };
  return dispatch => {
       async("/ticker/all","GET",data)
      .then(resp => dispatch({ type: action.getTickerList, responseData:resp }))
   }  
}

export function getShareDetailByTicker(data){ 
  //  data.action=action.getShareDetailByTicker;    
  //  return dispatch=>{ dispatch({type: action.getShareDetailByTicker,responseData:data}) };
   return dispatch => {
       async("/books/getShareDetailByTicker","GET",data)
       .then(resp => dispatch({ type: action.getShareDetailByTicker, responseData:resp }))
    }  
 }
export function getShareDetailByTickerAndPriceAndOrderType(data){ 
  //  data.action=action.getShareDetailByTicker;    
  //  return dispatch=>{ dispatch({type: action.getShareDetailByTicker,responseData:data}) };
   return dispatch => {
       async("/books/getDetailByTickerAndPriceAndOrderType","GET",data)
       .then(resp => dispatch({ type: action.getShareDetailByTickerAndPriceAndOrderType, responseData:resp }))
    }  
 }

 export function addOrder(data={},orderPrice,orderType){
  // data.action=action.addOrder;    
  // return dispatch=>{ dispatch({type: action.addOrder,responseData:data}) };
  return dispatch => {
      async("/orders/customSave","POST",data)      
      .then(resp => { 
          dispatch({ type: action.addOrder, responseData:resp });
          getShareDetailByTicker({ticker:data.ticker});
          if(orderPrice!=="" && orderType!==""){
            getShareDetailByTickerAndPriceAndOrderType({ticker:data.ticker,price:orderPrice,orderType:orderType});   
          } 
        })
   }  
}

 export function getOrderHistory(data={}){
  // data.action=action.getOrderHistory;    
  // return dispatch=>{ dispatch({type: action.getOrderHistory,responseData:data}) };
  return dispatch => {
      async("/orders/all","GET",data)
      .then(resp => dispatch({ type: action.getOrderHistory, responseData:resp }))
   }  
}

 

