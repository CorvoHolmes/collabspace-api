import { inject, injectable } from "tsyringe";

import { IRequestCreateUser } from "@modules/users/dto/users";
import { TelephoneFormat } from "@utils/formatData";
import { AppResponse } from "@helpers/responseParser";
import { AppError } from "@helpers/errorsHandler";
import { IUserRepositories } from "@modules/users/iRepositories/IUserRepositories";
import { IUuidProvider } from "@shared/container/providers/uuidProvider/IUuidProvider";
import { BcryptProvider } from "@shared/container/providers/bcryptProvider/implementation/BcryptProvider";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepositories,
    @inject("UuidProvider")
    private uuidProvider: IUuidProvider,
    @inject("BCryptProvider")
    private bcryptProvider: BcryptProvider
  ) {}

  async execute({
    name,
    email,
    confirmEmail,
    confirmPassword,
    password,
    telephone,
    birthDate,
  }: IRequestCreateUser): Promise<AppResponse> {
    if (password !== confirmPassword) {
      throw new AppError({
        message: "As senhas não coincidem!",
      });
    }

    if (
      !password.match(
        /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
      )
    ) {
      throw new AppError({
        message: "Senha fraca",
      });
    }

    if (email !== confirmEmail) {
      throw new AppError({
        message: "Os e-mails não coincidem",
      });
    }

    const listUserByEmail = await this.usersRepository.listByEmail(email);

    if (listUserByEmail) {
      throw new AppError({
        message: "Usuário já cadastrado",
      });
    }

    const passwordHash = await this.bcryptProvider.encryptPassword(password);

    const createUser = await this.usersRepository.create({
      id: this.uuidProvider.createUUID(),
      name,
      email,
      telephone: TelephoneFormat(telephone),
      birthDate,
      password: passwordHash.hash,
    });

    return new AppResponse({
      statusCode: 201,
      message: "Usuário criado com sucesso!",
      data: {
        id: createUser.id,
        name: createUser.name,
        email: createUser.email,
        telephone: createUser.telephone,
        birthDate: createUser.birth_date,
      },
    });
  }
}

export { CreateUserUseCase };
