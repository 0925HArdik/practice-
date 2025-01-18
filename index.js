const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Home Page');
})

app.listen(4000, () => {
    console.log('server running at port 4000');
})