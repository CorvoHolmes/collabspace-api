import { IUser } from "../dto/users";

interface IUserRepositories {
  create(user: any): Promise<IUser>;
}

export { IUserRepositories };
