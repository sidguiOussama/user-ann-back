const userRepository = require("../repository/role.repository")

exports.findAllRolesByUserId = (req, res) => {
    userRepository.findAllRolesByUserId(req,res);
}

exports.updateRoleByUserId = (req, res) => {
    userRepository.updateRoleByUserId(req,res);
}