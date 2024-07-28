/** @format */

import { commentType } from "../../components/Comment/comment";

export const ADD_COMMENT = "ADD_COMMENT";
export const SET_COMMENTS = "SET_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const LIKE_COMMENT = "LIKE_COMMENT";

export interface AddCommentAction {
  type: typeof ADD_COMMENT;
  payload: commentType;
}

export interface SetCommentsAction {
  type: typeof SET_COMMENTS;
  payload: commentType[];
}

export interface RemoveCommentAction {
  type: typeof REMOVE_COMMENT;
  payload: { id: number };
}

export interface LikeCommentAction {
  type: typeof LIKE_COMMENT;
  payload: { id: number };
}

export type CommentActionTypes =
  | AddCommentAction
  | SetCommentsAction
  | RemoveCommentAction
  | LikeCommentAction;

export const addComment = (comment: commentType): AddCommentAction => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const setComments = (comments: commentType[]): SetCommentsAction => ({
  type: SET_COMMENTS,
  payload: comments,
});

export const removeComment = ({ id }: { id: number }): RemoveCommentAction => ({
  type: REMOVE_COMMENT,
  payload: { id },
});

export const likeComment = ({ id }: { id: number }): LikeCommentAction => ({
  type: LIKE_COMMENT,
  payload: { id },
});
