import { Router } from "express";
import { MessagesController } from "./src/controllers/MessagesController";
import { SettingsController } from "./src/controllers/SettingsController";
import { UsersController } from "./src/controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUserName);
routes.put("/settings/:username", settingsController.update);

const usersController = new UsersController();
routes.post("/users", usersController.create);

const messagesController = new MessagesController();
routes.post("/messages", messagesController.create);

routes.get("/messages/:id", messagesController.showByUser);

export { routes };
