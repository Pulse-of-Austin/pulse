require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
