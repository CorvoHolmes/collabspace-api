import { Router } from "express";

import { CreateReactionController } from "@modules/reactions/useCases/createReaction/createReactionController";

import { authentication } from "src/middlewares/authentication";

const reactionRoutes = Router();

reactionRoutes.use(authentication);

reactionRoutes.post("/", new CreateReactionController().handle);

export { reactionRoutes };
