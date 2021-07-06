exports.authentication = function(req, res, next) {
    // Check if auth token is present in header
    // TODO: Check if token is valid
    var authToken = req.header('Authorization');
    if (authToken) {
      next();
    } else {
      res.send({
        message: 'Unauthorised request',
    });
}};