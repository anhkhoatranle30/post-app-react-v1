import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { postsThenUsers } from "../../redux/action/postsThenUsers";

import Post from "./Post";
import PostLoading from "./PostLoading";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
}));

export default function PostList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsThenUsers());
  }, [dispatch]);

  const { posts, loading } = useSelector((state) => state.postState);

  const classes = useStyles();

  const renderPosts = () =>
    posts.map((post) => <Post key={post.id} post={post} />);

  const renderLoadingPosts = () => {
    const loadingPost = [];
    for (let i = 30; i >= 0; i--) {
      loadingPost.push(<PostLoading key={i} />);
    }
    return loadingPost;
  };

  return (
    <div className={classes.root}>
      {loading && renderLoadingPosts()}
      {posts && renderPosts()}
    </div>
  );
}
