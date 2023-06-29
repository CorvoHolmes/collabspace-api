import { prisma } from "@/libs/prismaClient";
import { ICreateUser, IUser } from "../dto/users";
import { IUserRepositories } from "../iRepositories/IUserRepositories";

class UserRepository implements IUserRepositories {
  create({
    id,
    name,
    email,
    telephone,
    birthDate,
    password,
    avatarUrl,
  }: ICreateUser): Promise<IUser> {
    return prisma.users.create({
      data: {
        id,
        name,
        email,
        telephone,
        birth_date: birthDate,
        password,
        avatar_url: avatarUrl,
      },
    });
  }
}

export { UserRepository };
