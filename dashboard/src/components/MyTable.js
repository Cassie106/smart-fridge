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
            const fresh = item.isFresh ? "fresh" : "not fresh"
            if(item.weight > 0) {
                trs.push(<tr>
                    <td>{item.itemId}</td>
                    <td>{item.gasValue}</td>
                    <td>{item.weight}</td>
                    <td>{item.inTime}</td>
                    <td>{fresh}</td>
                    <td>{item.allergy}</td>
                    <td>{item.position}</td>
                </tr>)
            }
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
                        <tr>
                        <td>Banana-20220530184729</td>
                        <td>307</td>
                        <td>0.37</td>
                        <td>2022-05-30 18:47:29</td>
                        <td>Fresh</td>
                        <td>none</td>
                        <td>banana-a</td>
                    </tr>

                    <tr>
                        <td>Berry-20220531173012</td>
                        <td>291</td>
                        <td>0.24</td>
                        <td>2022-05-31 17:30:12</td>
                        <td>Fresh</td>
                        <td>none</td>
                        <td>berry-b</td>
                    </tr>

                    <tr>
                        <td>Orange-20220531191223</td>
                        <td>179</td>
                        <td>0.96</td>
                        <td>2022-05-31 19:12:23</td>
                        <td>Fresh</td>
                        <td>none</td>
                        <td>orange-a</td>
                    </tr>

                    <tr>
                        <td>Apple-20220530172930</td>
                        <td>152</td>
                        <td>0.76</td>
                        <td>2022-05-30 17:29:30</td>
                        <td>Fresh</td>
                        <td>none</td>
                        <td>apple-a</td>
                    </tr>
                    </tbody>
                </Table>
                <a type="button" className="btn btn-success" href='/home'>Back</a>
            </div>

        )
    }
}
export default MyTable;
