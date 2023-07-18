interface IReaction {
  id: string;
  user_id: string;
  post_id: string | null;
  comment_id: string | null;
  entity_type: number;
  reacted_at: Date;
}

interface IRequestCreateReaction {
  postId: string;
  commentId: string;
  entityType: number;
}

interface ICreateReaction {
  id: string;
  userId: string;
  postId: string;
  commentId: string;
  entityType: number;
}

export { IReaction, IRequestCreateReaction, ICreateReaction };
