/** @format */

import { AccountCircle, Close } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { memo, useState } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

import "./styles/comments-section.scss";

import { BottomSheet } from "../../../BottomSheet/bottomSheet";
import { Comment, commentType } from "../../../Comment/comment";
import {
  addComment,
  CommentActionTypes,
} from "../../../../@redux/actions/commentActions";
import { RootState } from "../../../../@redux/store/store";

type PostCommentSectionProps = {
  isOpen: boolean;
  post_id: number;
  userName: string;
  onClose: () => void;
};

export const PostCommentSection = memo(
  ({ isOpen, onClose, userName, post_id }: PostCommentSectionProps) => {
    const comments = useSelector((state: RootState) =>
      state.comment?.comments.filter((e) => e.post_id === post_id)
    );

    const [newComment, setNewComment] = useState("");
    const [replyingData, setReplyingData] = useState<
      | {
          username: string;
          comment_id: number;
        }
      | undefined
    >();
    const commentDispatch = useDispatch<Dispatch<CommentActionTypes>>();
    const commentsLength = useSelector(
      (state: RootState) => state.comment?.comments?.length
    );

    const isChildOfComment = ({
      child,
      parent,
    }: {
      child: commentType;
      parent: commentType;
    }) => {
      if (child.replied_comment_id !== parent.id) {
        if (parent.replied_comment_id) {
          const grandParent = comments?.find(
            (e) => e.id === parent.replied_comment_id
          );
          if (grandParent)
            isChildOfComment({
              child: parent,
              parent: grandParent,
            });
        }
      } else return true;

      return false;
    };

    return (
      <BottomSheet
        name="Comments"
        open={isOpen}
        onOpen={() => {}}
        onClose={() => {
          setReplyingData(undefined);
          setNewComment("");
          onClose();
        }}
      >
        {comments
          ?.filter((e) => !e.replied_comment_id)
          .map((item) => (
            <>
              <Comment
                id={item.id}
                onReply={(username) => {
                  setNewComment(`@${username}`);
                  setReplyingData({ username, comment_id: item.id });
                }}
              />
              {comments
                ?.filter((e) => {
                  const parent = comments.find((e2) => e2.id === item.id);
                  return (
                    !!e.replied_comment_id &&
                    !!parent &&
                    isChildOfComment({
                      child: e,
                      parent,
                    })
                  );
                })
                .map((reply) => (
                  <Comment
                    id={reply.id}
                    onReply={(username) => {
                      setNewComment(`@${username}  `);
                      setReplyingData({ username, comment_id: reply.id });
                    }}
                  />
                ))}
            </>
          ))}
        {replyingData?.comment_id ? (
          <div className="post-comment-section-component__reply">
            <span>{`Replying to ${replyingData.username}`}</span>
            <div
              className="post-comment-section-component__reply--close"
              onClick={() => {
                setReplyingData(undefined);
                setNewComment("");
              }}
            >
              <Close />
            </div>
          </div>
        ) : null}
        <div className="post-comment-section-component__add-container">
          <AccountCircle className="post-comment-section-component__add-container--avatar" />
          <TextField
            inputRef={(input) => input && input.focus()}
            value={newComment}
            placeholder={`Add a comment for ${userName}...`}
            onChange={(e) => {
              const value = e.target.value;
              setNewComment(value);
            }}
            className="post-comment-section-component__add-container--input"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                commentDispatch(
                  addComment({
                    id: (commentsLength ?? 0) + 1,
                    likes: 0,
                    post_id,
                    text: newComment,
                    username: "MyAccount",
                    replied_comment_id: !comments?.length
                      ? undefined
                      : replyingData?.comment_id,
                  })
                );
                setNewComment("");
                setReplyingData(undefined);
              }
            }}
          />
        </div>
      </BottomSheet>
    );
  }
);
