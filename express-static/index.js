const express = require('express');
const path = require('path');

const app = express();
const join = path.join(__dirname, 'public');

const returnFile = express.static(join);

app.use(returnFile);

app.listen(3000, () => console.log('listening on port 3000!'));
