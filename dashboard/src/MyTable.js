import Table from 'react-bootstrap/Table'

function MyTable() {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Category</th>
                <th>Amount</th>
                <th>Freshness</th>
                <th>Sensor Data</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Apple</td>
                <td>10</td>
                <td>Fresh</td>
                <td>80</td>
            </tr>
            <tr>
                <td>Tomato</td>
                <td>2</td>
                <td>Not fresh</td>
                <td>280</td>
            </tr>
            <tr>
                <td>Blueberry</td>
                <tdz>7</tdz>
                <td>Not fresh</td>
                <td>100</td>
            </tr>
            </tbody>
        </Table>
    );
}

export default MyTable;
