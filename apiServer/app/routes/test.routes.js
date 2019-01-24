// var express = require('express');
// var router = express.Router();
module.exports = function (app, db) {

  app.get('/', (req, res) => {
    res.send('MyPharm Server')
  }); 
  
  app.get('/api/', (req, res) => {
    res.send('MyPharm API')
  });

}
