import { AppError } from "@helpers/errorsHandler";
import { AppResponse } from "@helpers/responseParser";
import { IUserRepositories } from "@modules/users/iRepositories/IUserRepositories";
import { IUuidProvider } from "@shared/container/providers/uuidProvider/IUuidProvider";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
}
@injectable()
class InactivateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepositories,
    @inject("UuidProvider")
    private uuidProvider: IUuidProvider
  ) {}

  async execute({ id }: IRequest): Promise<AppResponse> {
    if (!this.uuidProvider.validateUUID(id)) {
      throw new AppError({
        message: "ID é inválido",
      });
    }

    const listUserById = await this.userRepository.listById(id);

    if (!listUserById) {
      throw new AppError({
        message: "Usuário não encontrado!",
      });
    }

    await this.userRepository.inactivate(id, false);

    return new AppResponse({
      message: "Usuário inativado com sucesso!",
    });
  }
}

export { InactivateUserUseCase };
