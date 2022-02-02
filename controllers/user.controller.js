const userRepository = require("../repository/user.repository")
  
  exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.findAllUsers = (req, res) => {
    userRepository.findAllUsers(req,res);
  };

  exports.findUserById = (req, res) => {
    userRepository.findUserById(req,res);
  };

  exports.DeleteUserById = (req, res) => {
    userRepository.DeleteUserById(req,res);
  }

  exports.UpdateUserById = (req, res) => {
    userRepository.UpdateUserById(req,res);
  }