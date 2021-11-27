import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import React from "react";
class Graph extends React.Component{
    render(){
        return(
            <LineChart className="graph" width={600} height={300} data={this.props.dataForDays}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="day" />
            <YAxis />
          </LineChart>

        );
    }
}
export default Graph