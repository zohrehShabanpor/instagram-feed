/** @format */

import { PostActionTypes, LIKE, UNLIKE } from "../actions/postActions";

type PostState = {
  isLiked: boolean;
};

const initialState: PostState = {
  isLiked: false,
};

const postReducer = (
  state = initialState,
  action: PostActionTypes
): PostState => {
  switch (action.type) {
    case LIKE:
      return { ...state, isLiked: true };
    case UNLIKE:
      return { ...state, isLiked: false };
    default:
      return state;
  }
};

export default postReducer;
