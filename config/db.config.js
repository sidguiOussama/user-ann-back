
 // --LOCAL HOST --

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "userapp",
    dialect: "mysql",
    pool: {
      max: 20,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };



  // -- CLOUD -- 

  /*module.exports = {
    HOST: "bdhr43lwip4c349of4y8-mysql.services.clever-cloud.com",
    USER: "u0hait1lyjxthjzj",
    PASSWORD: "3fV9QHcJh9Bm12lQj1oQ",
    DB: "bdhr43lwip4c349of4y8",
    dialect: "mysql",
    pool: {
      max: 20,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };*/