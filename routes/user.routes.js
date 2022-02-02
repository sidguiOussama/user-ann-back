const { authJwt } = require("../middleware");
const { verifySignUp } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.get(
    "/api/user/findAllUsers",
    controller.findAllUsers
  );

  app.post(
    "/api/user/findUserById",
    controller.findUserById
  );

  app.post(
    "/api/user/delete",
    controller.DeleteUserById
  );

  app.post(
    "/api/user/UpdateUserById",
    [
      verifySignUp.checkDuplicateEmail,
    ],
    controller.UpdateUserById
  );
};