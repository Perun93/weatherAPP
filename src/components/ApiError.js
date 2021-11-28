import React from "react";
import WeatherAPI from "../utils/WeatherAPI";
class ApiError extends React.Component{
    _goToHome(){
        WeatherAPI.goToHome();
    }

    render() {
        return (
        <div><h1>Something went wrong please try again</h1> <br/> 
            <button className="btn btn-success" sm={6} onClick={this._goToHome}>GO TO HOME</button>
          </div> 
        ); 
      }
}
export default ApiError