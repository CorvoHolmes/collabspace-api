import { Request, Response } from "express";
import { InactivateUserUseCase } from "./inactivateUserUseCase";
import { container } from "tsyringe";

class InactivateUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params as { id: string };

    const inactivateUserUseCase = container.resolve(InactivateUserUseCase);

    const result = await inactivateUserUseCase.execute({
      id,
    });

    return res.status(result.statusCode).json(result);
  }
}

export { InactivateUserController };
