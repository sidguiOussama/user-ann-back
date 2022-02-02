/**
 * User.repo.js
 * findAllUsers - 
 * FindUserById - id
 * DeleteUserById -id 
 * updateUserById -id & user
 * insertUser
 * 
 * Role.repo.js
 * findAllRolesByUserId
 * updateRoleByUserId
 * 
 */


 const db = require("../models");
 const User = db.user;
 const Role = db.role;

 var bcrypt = require("bcryptjs");
 
 exports.findAllUsers = (req, res) => {
    User.findAll()
      .then(users => {
            res.status(200).send({
                users
            });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.findUserById = (req, res) => {

    id = req.body.id;

    User.findByPk(id)
      .then(user => {
            res.status(200).send({
                id: user.id,
                nom: user.nom,
                prenom: user.prenom,
                telephone: user.telephone,
                email: user.email,
                password:user.password,
                enabled:user.enabled
            });
      })
      .catch(err => {
        res.status(500).send({ message: `Error! No user with id : ${id}`});
      });
  };


  exports.DeleteUserById = (req, res) => {

    Uid = req.body.id;

    User.destroy({
        where: {
            id: Uid
          }
    })
      .then(function (deletedUser) {
        if(deletedUser === 1){
            res.status(200).send({message:"Deleted successfully"});          
        }
        else
        {
            res.status(404).send({message:"User not found"})
        }
    })
      .catch(err => {
        res.status(500).send({ message: `Error! No user with id : ${Uid}`});
      });
  };

  exports.UpdateUserById = (req, res) => {

    Uid = req.body.id;

    Unom =  req.body.nom;
    Uprenom =  req.body.prenom;
    Utelephone =  req.body.telephone;
    if(req.body.password){
        Upassword =  bcrypt.hashSync(req.body.password,8);
    }else
    {
        Upassword = req.body.password;
    }
    Uemail = req.body.email;

    User.update({ nom: Unom,prenom: Uprenom, telephone: Utelephone,password: Upassword}, {
        where: {
          id: Uid
        }
      })
      .then(user => {
            if(Unom || Uprenom || Utelephone || Upassword || Uemail){
                res.status(200).send({message: `Success! User with id : ${Uid} has been updated`}); 
            }else{
                res.status(500).send({ message: `Error! Nothing to modify !`});
            }
      })
      .catch(err => {
        res.status(500).send({ message: `Error! No user with id : ${Uid}`});
      });
  };