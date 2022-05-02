import Table from 'react-bootstrap/Table'

function MyTable() {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Name</th>
                <th>Sensor Data</th>
                <th>Weight(kg)</th>
                <th>Date</th>
                <th>Freshness</th>
                <th>Food Allergies Category</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Apple 05021622-1</td>
                <td>190 </td>
                <td>200 kg</td>
                <td>05-21</td>
                <td>Fresh</td>
                <td>None</td>
            </tr>
            <tr>
                <td>Apple 05021709-1</td>
                <td>180 </td>
                <td>200 kg</td>
                <td>05-21</td>
                <td>Fresh</td>
                <td>None</td>
            </tr>
            <tr>
                <td>Tomato 04250908-2</td>
                <td>14 </td>
                <td>300 kg</td>
                <td>04-25</td>
                <td>Not fresh</td>
                <td>None</td>
            </tr>
            <tr>
                <td>Onion 03211823-3</td>
                <td>7 </td>
                <td>140 kg</td>
                <td>03-21</td>
                <td>Not fresh</td>
                <td>Seasoning</td>
            </tr>
            <tr>
                <td>Milk 02250844-2</td>
                <td>7 </td>
                <td>500 kg</td>
                <td>02-25</td>
                <td>Not fresh</td>
                <td>Milk</td>
            </tr>
            </tbody>
        </Table>
    );
}

export default MyTable;
