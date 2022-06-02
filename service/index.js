const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('./public'));



const warehouseRoutes = require('./routes/warehouseRoutes');
app.use('/warehouseItems', warehouseRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!!!!')
})




app.listen(port, () => {
    console.log(`Warehouse app listening on port ${port}`)
})