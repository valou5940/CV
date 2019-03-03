const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var experience = require('./experience/experience.js');

const URL = "/api";


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Content-Type', 'application/json');
    next();
});
app.use(bodyParser.json());

app.get(URL, function (req, res) {
    res.send('Hello World!');
});

app.get(URL + '/experience', (req, res) => {
    experience.getExperiences(req, res);
});

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});