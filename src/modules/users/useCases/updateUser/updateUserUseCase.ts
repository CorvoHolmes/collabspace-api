import { inject, injectable } from "tsyringe";

import { AppResponse } from "@helpers/responseParser";
import { IRequestUpdateUser } from "@modules/users/dto/users";
import { IUserRepositories } from "@modules/users/iRepositories/IUserRepositories";
import { IUuidProvider } from "@shared/container/providers/uuidProvider/IUuidProvider";
import { AppError } from "@helpers/errorsHandler";
import { TelephoneFormat } from "@utils/formatData";

interface IRequest extends IRequestUpdateUser {
  id: string;
}

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepositories,
    @inject("UuidProvider")
    private uuidProvider: IUuidProvider
  ) {}

  async execute({
    id,
    name,
    telephone,
    birthDate,
  }: IRequest): Promise<AppResponse> {
    if (!this.uuidProvider.validateUUID(id)) {
      throw new AppError({
        message: "ID é inválido!",
      });
    }

    const listUserById = await this.userRepository.listById(id);

    if (!listUserById) {
      throw new AppError({
        message: "Usuário não encontrado",
      });
    }

    await this.userRepository.update({
      id,
      name,
      telephone: TelephoneFormat(telephone),
      birthDate,
    });

    return new AppResponse({
      message: "Usuário atualizado com sucesso!",
    });
  }
}

export { UpdateUserUseCase };
