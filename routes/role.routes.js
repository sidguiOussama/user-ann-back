const { verifySignUp } = require("../middleware");
const controller = require("../controllers/role.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/role/findAllRolesByUserId", controller.findAllRolesByUserId);
  
  app.post("/api/role/updateRoleByUserId", controller.updateRoleByUserId);
};