/** @format */

import {
  BookmarkBorder,
  ChatBubbleOutline,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Send,
} from "@mui/icons-material";
import { memo, useState } from "react";
import comments from "../../mock/COMMENTS_MOCK.json";

import "./styles/post.scss";
import { BottomSheet } from "../BottomSheet/bottomSheet";
import { Comment } from "../Comment/comment";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  like,
  LikeAction,
  unlike,
  UnLikeAction,
} from "../../actions/postActions";
import { Dispatch } from "redux";

export type postType = {
  username: string;
  full_name: string;
  profile_picture: string;
  post_image: string;
  post_caption: string;
  post_likes: number;
};

type postProps = {
  post: postType;
};

export const Post = memo(({ post }: postProps) => {
  const isLike = useSelector((state: RootState) => state.post.isLiked);
  const dispatch = useDispatch<Dispatch<LikeAction | UnLikeAction>>();
  const [isOpen, setIsOpen] = useState(false);
  const {
    full_name,
    post_caption,
    post_image,
    post_likes,
    profile_picture,
    username,
  } = post;

  return (
    <div className="post-component">
      <div className="post-component__main">
        <div className="post-component__main--header">
          <div className="post-component__main--avatar">
            <img src={profile_picture} />
            <span>{full_name}</span>
          </div>
          <MoreVert />
        </div>
        <img src={post_image} />
      </div>
      <div className="post-component__toolbar">
        <div className="post-component__toolbar--start">
          <div
            onClick={() => {
              dispatch(isLike ? like() : unlike());
            }}
          >
            {isLike ? <Favorite /> : <FavoriteBorder />}
          </div>
          <div
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <ChatBubbleOutline />
          </div>
          <Send />
        </div>
        <BookmarkBorder />
      </div>
      <div className="post-component__caption">
        <span className="post-component__caption--like">
          {`${post_likes} likes`}
        </span>
        <div className="post-component__caption--content">
          <span className="post-component__caption--username">{username}</span>
          <span>{post_caption}</span>
        </div>
        <span
          onClick={() => {
            setIsOpen(true);
          }}
          className="post-component__caption--comment"
        >{`View all ${comments.length} comments`}</span>
      </div>
      <BottomSheet
        name="Comments"
        open={isOpen}
        onOpen={() => {}}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        {comments.map((item) => (
          <Comment comment={item} />
        ))}
      </BottomSheet>
    </div>
  );
});
