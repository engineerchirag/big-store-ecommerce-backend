exports.authentication = function(req, res, next) {
    // Check if auth token is present in header
    var authToken = req.header('Authorization');
    // TODO: Check if token is valid in DB or using jwt controller
    var userDetail = {
      id: 1,
      firstName: 'Chirag',
      roles: ['ADMIN'],
    }; // Do a lookup from DB validateTokenAndGetUserDetail(authToken);
    // throw new Error('Failed to fetch data from DB'); // Global uncaught Error handling 
    if (userDetail) {
      req.user = userDetail;
      console.log('authentication');
      next();
    } else {
      res.send({
        message: 'Unauthentic request',
    });
}};

exports.authorization = function(roles) {
  return function(req, res, next) {
    try {
      const haspMap = new Set(req.user.roles);
      roles.forEach(role => {
          if (haspMap.has(role)){
            next();
          }
      });
      res.send({
        message: 'Unauthorised request',
      });
    } catch(e) {
      res.send({
        message: 'Something went wrong',
      });
    }
  };
}