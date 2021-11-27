import React from "react";
import CityInfo from "./CityInfo";
import ToggleGraphs from "./ToggleGraphs";
import WeatherStore from "../stores/WeatherStore";
import WeatherAPI from "../utils/WeatherAPI";
import Actions from "../actions/Actions"
import Toggle from "./Toggle";
import { Container, Row } from "react-bootstrap";

function getState() {
  return {
    dataForCity: WeatherStore.getResponse(),
    dataForDays: WeatherStore.getDataForDays(),
  };
}

class City extends React.Component{
    constructor(props) {
        super(props);
        this.state = getState();
    }
    
    UNSAFE_componentWillMount () {
      WeatherStore.addChangeListener(this._onChange);
    }
    _goToHome(){
      WeatherAPI.swapCity();
    }
    UNSAFE_componentWillUnmount() {
      WeatherStore.removeChangeListener(this._onChange);
        Actions.resetStore();
    }

    _onChange = () => {
      var state = getState();
      this.setState(state);
    }
  
    render() {
        return (
          <Container className="sm" >
            <CityInfo dataForCity={this.state.dataForCity}/>
            <ToggleGraphs dataForDays={this.state.dataForDays}/>
            <Row className="justify-content-centar m-5">
            <button className="btn btn-success" sm={6} onClick={this._goToHome}>GO TO HOME</button>
            </Row>
            <Toggle size={"small"}/>
          </Container>
        ); 
      }
    }
  export default City