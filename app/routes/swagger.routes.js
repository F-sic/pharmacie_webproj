var swaggerJSDoc = require('swagger-jsdoc');

module.exports = function (app, db) {
  
  var swaggerDefinition = {
    info: {
      title: 'Node Swagger API',
      version: '1.0.0',
      description: 'Demonstrating how to describe a RESTful API with Swagger',
    },
    host: 'localhost:8888',
    basePath: '/',
  };
  
  var options = {
    swaggerDefinition: swaggerDefinition,
    apis: ['./app/routes/*.js'],
  };
  
  var swaggerSpec = swaggerJSDoc(options);
  
  app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}
