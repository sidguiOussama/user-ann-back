module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      nom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      enabled: {
        type: Sequelize.BOOLEAN ,
        defaultValue: true 
      }
    });
  
    return User;
  };