import { ICreateReaction, IReaction } from "../dtos/reactions";

interface IReactionsRepositories {
  create(reaction: ICreateReaction): Promise<IReaction>;
}

export { IReactionsRepositories };
