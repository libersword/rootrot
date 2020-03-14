const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token');

  //check token
  if(!token)return res.status(401).json({msg: 'Permission Denied'});
    
    try{
      //verify
      const decoded = jwt.verify(token, config.get('jwtSecret'));
      //add user
      req.user = decoded;
      next();
      
    }catch(e){
      res.status(400).json({msg: 'Token is not valid'})
    }
}

module.exports = auth; 