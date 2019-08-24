import React, { Component } from 'react';
import { Row,Col} from 'react-bootstrap';  
export class Input extends Component {
    constructor(props) {
        super(props)       
        this.changeTextBoxValue=this.changeTextBoxValue.bind(this);                  
    }
    componentWillMount() {
        
    }
    changeTextBoxValue(e){   
        this.props.changeTextBoxValue(e.target.value)        
    } 
  
    render() {        
        return (
            <React.Fragment>
                {this.props.textBoxType==='text' || this.props.textBoxType==='number'?
                <Row className="margin-0 padding-top-3">
                    <Col md={4}>{this.props.displayName}</Col>
                    <Col md={8}>
                    <input 
                        required={this.props.required}
                        type={this.props.textBoxType} 
                        onChange={this.changeTextBoxValue} 
                        value={this.props.value}
                    />
                    </Col>
                </Row>
                :null}
                {this.props.textBoxType==='radio'?
                <Row className="margin-0">
                    <Col md={12}>
                        <Row className="margin-0 padding-top-3">
                            {this.props.displayNames.map((v,k)=>{
                                return(
                                    <Col md={12/this.props.displayNames.length} key={k}>
                                        <input type="radio" name={this.props.name} onClick={this.changeTextBoxValue} required={this.props.required} value={v}/>{v}
                                    </Col>
                                )
                            })
                            }
                        </Row>
                    </Col>
                </Row>
                :null}
            </React.Fragment>
        );
    }
}
export default Input;