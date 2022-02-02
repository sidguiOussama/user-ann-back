/*const db = require("../models");

const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");*/
const config = require("../config/auth.config");
const authRepository = require("../repository/auth.repository")

exports.signup = (req, res) => {
    authRepository.signup(req,res);
};

exports.signin = (req, res) => {
    authRepository.signin(req,res);
};