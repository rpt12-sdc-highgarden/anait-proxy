require('newrelic');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname));
app.use('/:id', express.static(__dirname));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));