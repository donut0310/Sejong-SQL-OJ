import { AuthMiddleware } from "../../middlewares/auth.middleware.js";
import { AuthController } from "../../controllers/auth.controller.js";
// import { UsersController } from "../../controllers/users.controller.js";

export class AuthRoute {
  app;
  constructor(app) {
    this.app = app;
    this.configure();
  }

  configure() {
    const authMiddleware = new AuthMiddleware();
    const authController = new AuthController();

    this.app.post("/api/v1/auth/signin", [
      authMiddleware.verifyUserByLocalPassport,
      authController.createJWT,
    ]);

    this.app.get("/api/v1/auth/signout", [authController.logout]);

    // this.app.get("/api/v1/auth/access-token", [
    //   authMiddleware.verifyToken,
    //   authController.refreshAccessToken,
    // ]);
  }
}
