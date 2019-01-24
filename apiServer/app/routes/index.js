const test = require('./test.routes');
const product = require('./product.routes');
const swagger = require('./swagger.routes');

module.exports = function (app, db) {
  test(app, db)
  product(app, db)
  swagger(app, db)
}
