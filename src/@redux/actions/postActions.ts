/** @format */

import { postType } from "../../components/Post/post";

export const SET_POSTS = "SET_POSTS";
export const LIKE_POST = "LIKE_POST";

export interface SetPostsAction {
  type: typeof SET_POSTS;
  payload: postType[];
}

export interface LikePostAction {
  type: typeof LIKE_POST;
  payload: { id: number };
}

export type PostActionTypes = SetPostsAction | LikePostAction;

export const setPosts = (posts: postType[]): SetPostsAction => ({
  type: SET_POSTS,
  payload: posts,
});
export const likePost = ({ id }: { id: number }): LikePostAction => ({
  type: LIKE_POST,
  payload: { id },
});
