/** @format */

import {
  AccountCircle,
  DeleteOutline,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import clsx from "clsx";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import "./styles/comments.scss";

import { RootState } from "../../@redux/store/store";
import {
  CommentActionTypes,
  likeComment,
  removeComment,
} from "../../@redux/actions/commentActions";

export type commentType = {
  username: string;
  profile_picture?: string;
  likes: number;
  text: string;
  id: number;
  post_id: number;
  replied_comment_id?: number;
  is_liked?: boolean;
};

type commentProps = {
  id: number;
  onReply: (username: string) => void;
};

export const Comment = memo(({ id, onReply }: commentProps) => {
  const comment = useSelector((state: RootState) =>
    state.comment?.comments.find((e) => e.id === id)
  );
  const commentDispatch = useDispatch<Dispatch<CommentActionTypes>>();

  if (!comment) return null;

  const {
    likes,
    profile_picture,
    text,
    username,
    is_liked,
    replied_comment_id,
  } = comment;

  return (
    <div
      className={clsx(
        "comment-component",
        !!replied_comment_id && "comment-component--replied"
      )}
    >
      {profile_picture ? (
        <img src={profile_picture} />
      ) : (
        <AccountCircle className="comment-component__avatar" />
      )}
      <div className="comment-component__content">
        <span>{username}</span>
        <p>{text}</p>
        {replied_comment_id ? null : (
          <span
            onClick={() => {
              onReply(username);
            }}
            className="comment-component__content--reply"
          >
            reply
          </span>
        )}
      </div>
      <div className="comment-component__like">
        <div
          onClick={() => {
            commentDispatch(likeComment({ id }));
          }}
        >
          {is_liked ? <Favorite /> : <FavoriteBorder />}
        </div>
        {likes ? <span>{likes}</span> : null}
        <div
          onClick={() => {
            commentDispatch(removeComment({ id }));
          }}
        >
          <DeleteOutline />
        </div>
      </div>
    </div>
  );
});
