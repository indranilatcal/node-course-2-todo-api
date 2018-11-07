var {User} = require('./../models/user');

var authenticate = async (req, res, next) => {
    var token = req.header('x-auth');
  
    try {
      const user = await User.findByToken(token);
      if(!user){
        return Promise.reject();
      }

      req.user = user;
      req.token = token;
      next();
    } catch (e) {
      res.status(401).send();
    }
  };

  module.exports = {authenticate};