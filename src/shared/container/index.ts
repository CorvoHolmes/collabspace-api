import "./providers";
import { IUserRepositories } from "@modules/users/iRepositories/IUserRepositories";
import { UserRepository } from "@modules/users/repositories/UserRepository";
import { container } from "tsyringe";

container.registerSingleton<IUserRepositories>(
  "UserRepository",
  UserRepository
);
