const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => {
  res.send('main blog page');
});

app.get('/api', (req, res) => {
  res.send('api blog page');
});

app.listen(port, () => console.log(`App running on port ${port}`));
