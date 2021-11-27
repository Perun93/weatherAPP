import React from "react";
import { Row } from "react-bootstrap";
import TableDays from "./Table";
import Graph from "./Graph";
class ToggleGraphs extends React.Component {
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
        <div>
            <Row className="mb-5 justify-content-md-center">
            <label>
            <input type="checkbox" onClick={()=> this.switchToggle()}/>
            <span>
            <i></i>
            </span>
            </label>
            </Row>
            {this.state.value ? <Graph dataForDays={this.props.dataForDays}/> :<TableDays dataForDays={this.props.dataForDays}/>}
            
        </div>
       
      );
    }
  }
export default ToggleGraphs