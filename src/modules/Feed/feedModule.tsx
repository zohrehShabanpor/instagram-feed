/** @format */

import { memo } from "react";

import "./styles/feed-module.scss";

import { Header } from "../../components/Header/header";
import { Navbar } from "../../components/Navbar/navbar";
import posts from "../../mock/POST_MOCK.json";
import { Post } from "../../components/Post/post";

export const FeedModule = memo(() => {
  return (
    <div className="feed-module">
      <Header />
      <div className="feed-module__content">
        {posts.map((item) => {
          return <Post post={item} />;
        })}
      </div>
      <Navbar />
    </div>
  );
});
