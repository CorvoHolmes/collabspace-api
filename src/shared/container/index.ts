import { PostRepository } from "@modules/posts/repositories/PostRepository";
import "./providers";
import { IUserRepositories } from "@modules/users/iRepositories/IUserRepositories";
import { UserRepository } from "@modules/users/repositories/UserRepository";
import { container } from "tsyringe";
import { IPostsRepositories } from "@modules/posts/iRepositories/IPostsRepositories";
import { ICommentsRepositories } from "@modules/comments/iRepositories/ICommentsRepositories";
import { CommentRepository } from "@modules/comments/Repositories/CommentRepository";

container.registerSingleton<IUserRepositories>(
  "UserRepository",
  UserRepository
);

container.registerSingleton<IPostsRepositories>(
  "PostRepository",
  PostRepository
);

container.registerSingleton<ICommentsRepositories>(
  "CommentRepository",
  CommentRepository
);
