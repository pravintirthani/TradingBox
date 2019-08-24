import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import CombineReducer from './CombineReducer';
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/index.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faFilm,faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import * as serviceWorker from './serviceWorker';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

library.add(faFilm,faSignInAlt)

const store = createStore(CombineReducer,applyMiddleware(
    thunkMiddleware
  ));
  
ReactDOM.render(<Routes store={store} />, document.getElementById('root'));

serviceWorker.unregister();