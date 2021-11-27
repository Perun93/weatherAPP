import React from "react";
import PropTypes from 'prop-types'
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Toggle from "./Toggle";
import ToggleGraphs from "./ToggleGraphs";
class CityMain extends React.Component{

  static propTypes = {
    data : PropTypes.element,  
  }
  constructor(props) {
    super(props);
    this.state = {
      dataForCity: ""
    };
  }
  
  componentDidUpdate(){
    this.setState({ dataForCity: this.props.dataForCity})
  }
  
  UNSAFE_componentWillMount(){
    this.setState({ dataForCity: this.props.dataForCity})
  }
    render() {
        return (
          <div>
              {this.props.dataForDays ? null : <Container className="justify-content-md-center" fluid="md">
                <Row className="justify-content-md-center">
                  <Col sm={5} xs={5}>
                  <h1>{this.props.dataForCity[0].name}</h1> 
                  <h3>{this.props.dataForCity[3].weather} </h3>
                  </Col>
                  <Col sm={5} xs={5}>
                  <h3>Temperature: {this.dataForCity.data[1].temp}</h3> 
                  <h3>Humidity: {this.dataForCity.data[2].humidity}%</h3>
                  <h3>Wind: {this.dataForCity.data[4].wind}km/h</h3>
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                <ToggleGraphs dataForDays={this.props.dataForDays}/>
                </Row>
                <Row className="justify-content-md-start">
                  <Col>
                    <Toggle cities = {this.props.cities}/>
                  </Col>
                </Row>
            </Container>
            } 
          </div>
          ); 
      }
}

export default CityMain