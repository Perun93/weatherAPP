import React from "react";
import { Row } from "react-bootstrap";
import History from './History'

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: true,
        };
    }
    switchToggle() {
        this.setState({
            value: !this.state.value
        }) 
    }
    render() {
    return (
        <Row className="mb-5 justify-content-md-center">
            <label>
            <input type="checkbox" onClick={()=> this.switchToggle()}/>
            <span>
            <i></i>
            </span>
            </label>
            { this.state.value ? <History size= {this.props.size}/> :null}
        </Row>
      );
    }
  }
export default Toggle