import { combineReducers } from 'redux'
import OrderReducer from './components/Order/OrderReducer';
import UtilReducer from './components/Util/Reducer';
export default combineReducers({
    OrderReducer,    
    UtilReducer,
})