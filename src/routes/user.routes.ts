import { Router } from "express";

import { CreateUserController } from "@modules/users/useCases/createUser/createUserController";
import { UpdateUserController } from "@modules/users/useCases/updateUser/updateUserController";
import { InactivateUserController } from "@modules/users/useCases/inactivateUser/inactivateUserController";

import { authentication } from "src/middlewares/authentication";

const userRoutes = Router();

userRoutes.post("/", new CreateUserController().handle);

userRoutes.use(authentication);

userRoutes.put("/:id", new UpdateUserController().handle);
userRoutes.delete("/:id", new InactivateUserController().handle);

export { userRoutes };
