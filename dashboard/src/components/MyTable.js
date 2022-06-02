import React from "react";
import Table from 'react-bootstrap/Table'
import {fetchItems} from '../asyncActions'

class MyTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsList: []
        }
    }
    componentDidMount() {
        fetchItems().then(res => {
            this.setState({
                itemsList: res.data
            })
        })
    }
    
    render() {
        fetchItems().then(res => {
            this.state.itemsList = res.data
        })
        const {itemsList} = this.state
        console.log(itemsList)
        let trs = []
        itemsList.forEach(item => {
            trs.push(<tr>
                <td>{item.itemId}</td>
                <td>{item.gasValue}</td>
                <td>{item.weight}</td>
                <td>{item.inTime}</td>
                <td>{item.isFresh}</td>
                <td>{item.allergy}</td>
                <td>{item.position}</td>
            </tr>)
        })
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Sensor Data</th>
                        <th>Weight(kg)</th>
                        <th>Date</th>
                        <th>Freshness</th>
                        <th>Food Allergies Category</th>
                        <th>Area code</th>
                    </tr>
                    </thead>
                    <tbody>
                        {trs}
                    </tbody>
                </Table>
                <a type="button" className="btn btn-warning" href='/'>Back</a>
            </div>

        )
    }
}
export default MyTable;
// function MyTable() {
//     const items = await fetchItems()
//     console.log(items);
//     return (
//         <div>
//             <Table striped bordered hover>
//                 <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Sensor Data</th>
//                     <th>Weight(kg)</th>
//                     <th>Date</th>
//                     <th>Freshness</th>
//                     <th>Food Allergies Category</th>
//                     <th>Area code</th>

//                 </tr>
//                 </thead>
//                 <tbody>
//                 <tr>
//                     <td>Apple 05021622-1</td>
//                     <td>190 </td>
//                     <td>200 kg</td>
//                     <td>05-21</td>
//                     <td>Fresh</td>
//                     <td>None</td>
//                     <td>A</td>
//                 </tr>
//                 <tr>
//                     <td>Apple 05021709-1</td>
//                     <td>180 </td>
//                     <td>200 kg</td>
//                     <td>05-21</td>
//                     <td>Fresh</td>
//                     <td>None</td>
//                     <td>A</td>
//                 </tr>
//                 <tr>
//                     <td>Tomato 04250908-2</td>
//                     <td>14 </td>
//                     <td>300 kg</td>
//                     <td>04-25</td>
//                     <td>Not fresh</td>
//                     <td>None</td>
//                     <td>B</td>
//                 </tr>
//                 <tr>
//                     <td>Onion 03211823-3</td>
//                     <td>7 </td>
//                     <td>140 kg</td>
//                     <td>03-21</td>
//                     <td>Not fresh</td>
//                     <td>Seasoning</td>
//                     <td>C</td>
//                 </tr>
//                 <tr>
//                     <td>Milk 02250844-2</td>
//                     <td>7 </td>
//                     <td>500 kg</td>
//                     <td>02-25</td>
//                     <td>
//                         @Milk
//                         {/*<span className="label label-success">Spoiled</span>*/}
//                     </td>
//                     <td>Milk</td>
//                     <td>B</td>
//                 </tr>
//                 </tbody>
//             </Table>
//             <a type="button" className="btn btn-warning" href='/'>Back</a>
//         </div>

//     );
// }

// export default MyTable;
