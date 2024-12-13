const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.send('Hello, World! Welcomel.\n');
});

app.get('/info', (req, res) => {
  res.send('Ubuntu Server.\n');
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});