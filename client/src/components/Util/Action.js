import * as action from '../../Constant.js';
import {async} from '../../api/index.js';

// export const fetchUsers = () => {
export const login= (data={}) => {  
  data.action=action.login;
  return dispatch => {
      async("user/login","POST",data)
      .then(resp => dispatch({ type: action.login, responseData:resp }))
   }
}
export const signup= (data={}) => {  
  return dispatch => {
      async("user/signUp","POST",data)
      .then(resp => dispatch({ type: action.signup, responseData:resp }))
   }
}