'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Alooooooooo!');
});

app.get('*', (req, res) => {
  res.send('Deu ruim!', 404);
});

app.listen(PORT, HOST);
