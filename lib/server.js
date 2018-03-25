const express = require('express');
const config = require('./config.js');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(config.port, function(){
  console.info(`Running on port ${config.port}`);
});
