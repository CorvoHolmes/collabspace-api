import { Request, Response } from "express";
import { DeleteFriendUseCase } from "./deleteFriendUseCase";
import { container } from "tsyringe";

class DeleteFriendController {
  async handle(request: Request, response: Response) {
    const { usrId } = request;
    const { id } = request.params as { id: string };

    const deleteFriendUseCase = container.resolve(DeleteFriendUseCase);

    const result = await deleteFriendUseCase.execute({
      usrId,
      id,
    });

    return response.status(result.statusCode).json(result);
  }
}

export { DeleteFriendController };
