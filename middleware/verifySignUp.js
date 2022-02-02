const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateEmail = (req, res, next) => {
    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });

};

checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        if (req.body.roles != "admin") {
          res.status(400).send({
            message: `Failed! Role ${req.body.roles} does not exist!`
          });
          return;
        }
      
    }
  
    next();
};

const verifySignUp = {
  checkDuplicateEmail: checkDuplicateEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;