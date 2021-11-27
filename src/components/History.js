import React from "react";
import { Row,Col } from "react-bootstrap";

import WeatherStore from "../stores/WeatherStore";
import WeatherAPI from "../utils/WeatherAPI";

function getState() {
  return {
    history: WeatherStore.getHistory(),
  };
}
function getSmallHistory(){
  return {
    history: WeatherStore.getSmallHistory(),
  };
}

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = getState();
    }
    
    UNSAFE_componentWillMount () {
      WeatherStore.addChangeListener(this._onChange);
    }
    _goToCity(city){
      WeatherAPI.getDataByCity(city);
      WeatherAPI.getDataForDays(city);
      WeatherAPI.goToCity();
    }
    UNSAFE_componentWillUnmount() {
      WeatherStore.removeChangeListener(this._onChange);
        /*Actions.resetVidDisplayStore();*/
    }

    _onChange = () => {
      var state
      if(this.props.size !== undefined && this.props.size ==="small"){
        state = getSmallHistory
      }else{
        state = getState();
      }
      this.setState(state);
    }
  
    render() {
      return (
        <Row className="justify-content-center historyContent">
        {this.state.history.length > 0 ? this.state.history.map(cities => 
        <Col key={cities} onClick={(e) => this._goToCity(cities.city)} className="historyItem p-2 me-5 mb-5" xs={3}> {cities.city}<br/>{cities.date} </Col>) : <h2 className="mt-5 emptyHistory">History is empty</h2>} 
        </Row>     
      );
    }
  }
export default History