import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const createUserCase = new CreateUserUseCase();

    createUserCase.execute();

    res.json({ msg: "Olá Mundo!" });
  }
}

export { CreateUserController };
