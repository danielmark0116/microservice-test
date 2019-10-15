const path = require('path');
const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname, 'api.html'));
});

app.listen(port, () => console.log(`App running on port ${port}`));
