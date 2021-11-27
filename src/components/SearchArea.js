import React from "react";
import { Col, InputGroup, FormControl } from "react-bootstrap";
import Toggle from './Toggle'
import WeatherAPI from "../utils/WeatherAPI";

class SearchArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue:"",
        };
    this.handleChange = this.handleChange.bind(this);
    }
    
    _handleKeyDown = (event) => {
        if (event.key === 'Enter') {
              WeatherAPI.getDataByCity(this.state.searchValue);
              WeatherAPI.getDataForDays(this.state.searchValue);
              WeatherAPI.saveToHistory(this.state.searchValue);
              WeatherAPI.swapCity();
        }
      }

      handleChange(event) {
        this.setState({searchValue: event.target.value});
      }

    render() {
      return (
       <Col xs={12} md={12}>
         <Col>
         <InputGroup className="mb-5 searchComponent" onKeyDown={this._handleKeyDown}>
            <InputGroup.Text id="basic-addon1"><i class="bi bi-search"></i></InputGroup.Text>
            <FormControl 
            type="text" onChange={this.handleChange}
            placeholder="Search for city"
            aria-label="Search for city"
            aria-describedby="basic-addon1"
            value={this.state.searchValue}
            />
          </InputGroup>
       </Col>
       <Col>
        <Toggle size="big"/>
       </Col>
       </Col>
      );
    }
  }
export default SearchArea