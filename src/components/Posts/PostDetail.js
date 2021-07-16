import React, { useEffect } from "react";

import { Grid, Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

import { useParams } from "react-router-dom";
import { fetchPostThenUserThenComments } from "../../redux/action/postThenUserThenComments";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import PostCard from "./PostCard";
import CommentList from "../Comments/CommentList";

export default function PostDetail() {
  const { postId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostThenUserThenComments(postId));
  }, [dispatch, postId]);

  const post = useSelector((state) => state.postState.posts[0]);
  const user = useSelector((state) =>
    state.users.find((user) => user.id === post.userId)
  );

  return (
    <Grid>
      <Button component={Link} to="/" color="primary">
        <ArrowBack /> Back to list
      </Button>
      {post && user && <PostCard post={post} user={user} />}
      <CommentList />
    </Grid>
  );
}
