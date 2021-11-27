import React from "react";
import { Table } from "react-bootstrap";
class TableDays extends React.Component{
    render(){
        return(
           <div>
               <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Day</th>
                        <th>Temperature</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.dataForDays.map(days => 
                        <tr>
                         <td key={days} className="" md={6}xs={6}>{days.day}</td>
                         <td key={days} className="" md={6}xs={6}>{days.value}</td>
                        </tr>
                        )} 
                    </tbody>
                    </Table>
           </div>

        );
    }
}
export default TableDays