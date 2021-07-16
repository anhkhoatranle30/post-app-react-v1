import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";
import CommentDetail from "./CommentDetail";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: "10px auto",
    paddingTop: "10px",
  },
  avatar: {
    backgroundColor: indigo[500],
  },
}));

export default function CommentList() {
  const comments = useSelector((state) => state.comments.comments);
  const error = useSelector((state) => state.comments.error);

  const classes = useStyles();

  const renderComments = () => {
    if (error !== null) {
      return <Typography>Error occur : {error}</Typography>;
    }

    return comments.map((comment) => (
      <CommentDetail key={comment.id} comment={comment} />
    ));
  };

  return <Paper className={classes.root}>{renderComments()}</Paper>;
}
