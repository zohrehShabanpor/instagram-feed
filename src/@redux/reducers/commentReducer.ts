/** @format */

import { commentType } from "../../components/Comment/comment";
import {
  ADD_COMMENT,
  CommentActionTypes,
  LIKE_COMMENT,
  REMOVE_COMMENT,
  SET_COMMENTS,
} from "../actions/commentActions";

export type CommentState = {
  comments: commentType[] | [];
};

const initialState: CommentState = {
  comments: [],
};

const commentReducer = (
  state = initialState,
  action: CommentActionTypes
): CommentState => {
  switch (action.type) {
    case ADD_COMMENT:
      return { comments: [...(state.comments ?? []), action.payload] };
    case SET_COMMENTS:
      return { comments: action.payload };
    case REMOVE_COMMENT:
      return {
        comments: state.comments.filter(
          (e) =>
            e.id !== action.payload.id &&
            e.replied_comment_id !== action.payload.id
        ),
      };
    case LIKE_COMMENT:
      action.payload;
      return {
        comments: state.comments.map((item) => {
          if (item.id === action.payload.id)
            return {
              ...item,
              is_liked: !item.is_liked,
              likes: item.likes + (item.is_liked ? -1 : 1),
            };
          return item;
        }),
      };
    default:
      return state;
  }
};

export default commentReducer;
