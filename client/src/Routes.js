import React, { Component } from 'react';

import { BrowserRouter,Route ,Switch} from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import Order from './components/Order/Order';

class Routes extends Component {

render(){         
    return(
        <Provider store={this.props.store}>
            <BrowserRouter>                            
                <Route path="/">
                    <App>    
                        <Switch>   
                            <Route path="/order" component={Order} />                                 
                            <Route path="*" component={Order} /> 
                        </Switch>   
                    </App>    
                </Route>
                
            </BrowserRouter>        
        </Provider>
        )
    }
} 

export default (Routes)