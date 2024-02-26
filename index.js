const express = require('express');
const db = require('./src/database/db');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, function() { 
    console.log('API iniciada no http://localhost:' + port);
});