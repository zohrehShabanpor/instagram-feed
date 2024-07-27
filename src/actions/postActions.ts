/** @format */

export const LIKE = "LIKE";
export const UNLIKE = "UNLIKE";

export interface LikeAction {
  type: typeof LIKE;
}

export interface UnLikeAction {
  type: typeof UNLIKE;
}

export type PostActionTypes = LikeAction | UnLikeAction;

export const like = (): LikeAction => ({ type: LIKE });
export const unlike = (): UnLikeAction => ({ type: UNLIKE });
