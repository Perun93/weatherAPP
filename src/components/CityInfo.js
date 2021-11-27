import React from "react";
import { Col,Row } from "react-bootstrap";

import WeatherAPI from "../utils/WeatherAPI";

class CityInfo extends React.Component{
render(){
    var date = WeatherAPI.getTodaysDate()
    return(
        <div>
              {this.props.dataForCity.length > 0 ? 
                <Row className="justify-content-md-center">
                  <Col sm={5} xs={5}>
                  <h1>{this.props.dataForCity[0].name}</h1> 
                  <h3>{date}</h3>
                  <h3>{this.props.dataForCity[3].weather} </h3>
                  </Col>
                  <Col sm={5} xs={5}>
                  <h3>Temperature: {this.props.dataForCity[1].temp}</h3> 
                  <h3>Humidity: {this.props.dataForCity[2].humidity}%</h3>
                  <h3>Wind: {this.props.dataForCity[4].wind}km/h</h3>
                  </Col>
                </Row>
            : null
            } 
          </div>
    )
}
}
export default CityInfo