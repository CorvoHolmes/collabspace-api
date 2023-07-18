import { prisma } from "@libs/prismaClient";
import { ICreateReaction, IReaction } from "../dtos/reactions";
import { IReactionsRepositories } from "../iRepositories/IReactionsRepositories";

class ReactionRepository implements IReactionsRepositories {
  create({
    id,
    userId,
    postId,
    commentId,
    entityType,
  }: ICreateReaction): Promise<IReaction> {
    return prisma.reactions.create({
      data: {
        id,
        user_id: userId,
        post_id: postId || null,
        comment_id: commentId || null,
        entity_type: entityType,
      },
    });
  }
}

export { ReactionRepository };
