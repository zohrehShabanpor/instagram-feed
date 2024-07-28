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
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import "./styles/post.scss";

import { RootState } from "../../@redux/store/store";
import { likePost, PostActionTypes } from "../../@redux/actions/postActions";
import { PostCommentSection } from "./components/commentSection/commentSection";

export type postType = {
  id: number;
  username: string;
  full_name: string;
  profile_picture: string;
  post_image: string;
  post_caption: string;
  post_likes: number;
  is_liked?: boolean;
};

type postProps = {
  id: number;
};

export const Post = memo(({ id }: postProps) => {
  const post = useSelector((state: RootState) =>
    state.post?.posts.find((e) => e.id === id)
  );
  const commentsLength = useSelector(
    (state: RootState) =>
      state.comment?.comments.filter((e) => e.post_id === id).length
  );

  const postDispatch = useDispatch<Dispatch<PostActionTypes>>();

  const [isOpen, setIsOpen] = useState(false);

  if (!post) return null;

  const {
    post_caption,
    post_image,
    post_likes,
    profile_picture,
    username,
    is_liked,
  } = post;

  return (
    <div className="post-component">
      <div className="post-component__main">
        <div className="post-component__main--header">
          <div className="post-component__main--avatar">
            <img src={profile_picture} />
            <span>{username}</span>
          </div>
          <MoreVert />
        </div>
        <img src={post_image} />
      </div>
      <div className="post-component__toolbar">
        <div className="post-component__toolbar--start">
          <div
            onClick={() => {
              postDispatch(likePost({ id }));
            }}
          >
            {is_liked ? <Favorite /> : <FavoriteBorder />}
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
        {commentsLength ? (
          <span
            onClick={() => {
              setIsOpen(true);
            }}
            className="post-component__caption--comment"
          >{`View all ${commentsLength} comments`}</span>
        ) : null}
      </div>
      <PostCommentSection
        post_id={id}
        userName={username}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
});
