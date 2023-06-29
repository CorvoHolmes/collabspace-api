import { IRequestCreateUser } from "../../dto/users";

class CreateUserUseCase {
  async execute({
    name,
    email,
    confirmEmail,
    confirmPassword,
    password,
    telephone,
    birthDate,
  }: IRequestCreateUser) {}
}

export { CreateUserUseCase };
