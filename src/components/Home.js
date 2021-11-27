import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import City from "./City";
import SearchArea from './SearchArea';
import WeatherStore from "../stores/WeatherStore";
import Actions from "../actions/Actions"
import WeatherAPI from "../utils/WeatherAPI";

function getState() {
  return {
    citySwap: WeatherStore.getCitySwap(),
  };
}

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = getState();
    }

    UNSAFE_componentWillMount () {
    WeatherStore.addChangeListener(this._onChange);
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
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col sm={12}>
          {this.state.citySwap ? <City/> : <SearchArea/>}  
          </Col>
        </Row>
      </Container>
      );
    }
  }
export default Home