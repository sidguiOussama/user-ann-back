 const db = require("../models");
 const User = db.user;
 const Role = db.role;
 sequelize = db.sequelize
 exports.findAllRolesByUserId = (req, res) => {
    User.findOne({
        where: {
          id: req.body.id
        },
        include: Role 

      })
      .then(users => {
            res.status(200).send({
                userId : users.id,
                nom: users.nom,
                roles : users.roles[0].name
            });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.updateRoleByUserId = async (req, res) => {
    /*const [results, metadata] = await sequelize.query("UPDATE user_roles SET roleId ="+ req.body.id +"WHERE userId ="+ req.body.role);
    res.status(200).send({
      message :  "user_roles was changed"
    });*/
  };
