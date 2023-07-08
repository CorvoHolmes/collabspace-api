import { PostRepository } from "@modules/posts/repositories/PostRepository";
import "./providers";
import { IUserRepositories } from "@modules/users/iRepositories/IUserRepositories";
import { UserRepository } from "@modules/users/repositories/UserRepository";
import { container } from "tsyringe";
import { IPostsRepositories } from "@modules/posts/iRepositories/IPostsRepositories";

container.registerSingleton<IUserRepositories>(
  "UserRepository",
  UserRepository
);

container.registerSingleton<IPostsRepositories>(
  "PostRepository",
  PostRepository
);
