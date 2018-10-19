const express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendfile('public/index.html');
});

app.listen(3000);