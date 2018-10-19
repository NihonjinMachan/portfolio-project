const express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendfile('public/index.html');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});