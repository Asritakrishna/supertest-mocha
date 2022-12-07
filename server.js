const express = require('express')
var app = express();
app.get('/', (req, res) => {
    res.status(200).send({name: 'Asrita', age: '21'});
});

app.listen(3000);


module.exports.app = app;