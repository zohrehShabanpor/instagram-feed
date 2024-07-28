/** @format */

import { postType } from "../../components/Post/post";
import { SET_POSTS, LIKE_POST, PostActionTypes } from "../actions/postActions";

export type PostState = {
  posts: postType[] | [];
};

const initialState: PostState = {
  posts: [],
};

const postReducer = (
  state = initialState,
  action: PostActionTypes
): PostState => {
  switch (action.type) {
    case SET_POSTS:
      return { posts: action.payload };
    case LIKE_POST:
      return {
        posts: state.posts.map((item) => {
          if (item.id === action.payload.id)
            return {
              ...item,
              is_liked: !item.is_liked,
              post_likes: item.post_likes + (item.is_liked ? -1 : 1),
            };
          return item;
        }),
      };
    default:
      return state;
  }
};

export default postReducer;
