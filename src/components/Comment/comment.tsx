/** @format */

import { FavoriteBorder } from "@mui/icons-material";
import { memo } from "react";

import "./styles/comments.scss";

export type commentType = {
  username: string;
  profile_picture: string;
  likes: number;
  text: string;
  id: number;
};

type commentProps = {
  comment: commentType;
};

export const Comment = memo(({ comment }: commentProps) => {
  const { likes, profile_picture, text, username } = comment;
  return (
    <div className="comment-component">
      <img src={profile_picture} />
      <div className="comment-component__content">
        <span>{username}</span>
        <p>{text}</p>
        <span className="comment-component__content--reply">reply</span>
      </div>
      <div className="comment-component__like">
        <FavoriteBorder />
        {likes ? <span>{likes}</span> : null}
      </div>
    </div>
  );
});
