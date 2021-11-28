import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import City from "./City";
import SearchArea from './SearchArea';
import WeatherStore from "../stores/WeatherStore";
import WeatherAPI from "../utils/WeatherAPI";
import Actions from "../actions/Actions"
import ApiError from "./ApiError";

function getState() {
  return {
    citySwap: WeatherStore.getCitySwap(),
    apiError: WeatherStore.getApiError()
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
          {this.state.apiError ? 
          <ApiError/>
          :
          <Col sm={12}>
          {this.state.citySwap ? <City/> : <SearchArea/>}  
          </Col>
          }
        </Row>
      </Container>
      );
    }
  }
export default Home