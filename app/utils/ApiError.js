const ApplicationError = require('./ApplicationError')

class ApiError extends ApplicationError {
  constructor (apiName, message) {
    // Providing default message and overriding status code.
    // super('Could not complete request : ' + api_name + ', err: ' + message);
    super('Impossible de completer la requete : ' + apiName + ', err: ' + message)
  }
}

module.exports = {
  ApiError
}
