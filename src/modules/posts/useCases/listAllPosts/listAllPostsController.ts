import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllPostsUseCase } from "./listAllPostsUseCases";

class ListAllPostsController {
  async handle(request: Request, response: Response) {
    const { page, limit } = request.query as { page: string; limit: string };

    const listAllPostsUseCase = container.resolve(ListAllPostsUseCase);

    const result = await listAllPostsUseCase.execute({ page, limit });

    return response.status(result.statusCode).json(result);
  }
}

export { ListAllPostsController };
