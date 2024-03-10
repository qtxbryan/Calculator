const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

app.get('/', (req, res) => {
    res.send('Server homepage');
})

app.post('/add', (req, res) => {
    
    const {input1, input2} = req.body;
    const result = parseFloat(input1) + parseFloat(input2);
    res.json({result});
})

app.post('/sub', (req, res) => {
    
    const {input1, input2} = req.body;
    const result = parseFloat(input1) - parseFloat(input2);
    res.json({result});
})

app.listen(PORT, () => {
    console.log(`Server listening on port number ${PORT}`);
})