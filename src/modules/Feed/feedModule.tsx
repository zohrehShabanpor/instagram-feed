/** @format */

import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import "./styles/feed-module.scss";

import { Header } from "../../components/Header/header";
import { Navbar } from "../../components/Navbar/navbar";
import posts from "../../mock/POST_MOCK.json";
import comments from "../../mock/COMMENTS_MOCK.json";
import { Post } from "../../components/Post/post";
import { setPosts, PostActionTypes } from "../../@redux/actions/postActions";
import {
  CommentActionTypes,
  setComments,
} from "../../@redux/actions/commentActions";
import { RootState } from "../../@redux/store/store";

export const FeedModule = memo(() => {
  const postDispatch = useDispatch<Dispatch<PostActionTypes>>();
  const commentDispatch = useDispatch<Dispatch<CommentActionTypes>>();
  const hasPosts = useSelector(
    (state: RootState) => !!state.post?.posts.length
  );
  const hasComments = useSelector(
    (state: RootState) => !!state.comment?.comments.length
  );

  useEffect(() => {
    if (!hasPosts) postDispatch(setPosts(posts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  useEffect(() => {
    if (!hasComments) commentDispatch(setComments(comments));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments]);

  return (
    <div className="feed-module">
      <Header />
      <div className="feed-module__content">
        {posts.map((item) => {
          return <Post id={item.id} />;
        })}
      </div>
      <Navbar />
    </div>
  );
});
