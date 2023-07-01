import { prisma } from "@libs/prismaClient";
import { ICreateUser, IUser } from "@modules/users/dto/users";
import { IUserRepositories } from "@modules/users/iRepositories/IUserRepositories";

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

  listByEmail(email: string): Promise<IUser | null> {
    return prisma.users.findFirst({
      where: { email: { equals: email } },
    });
  }
}

export { UserRepository };
