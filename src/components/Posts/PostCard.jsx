import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import { indigo } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: 750,
    margin: "auto",
    paddingTop: "10px",
  },
  avatar: {
    backgroundColor: indigo[500],
  },
}));

export default function PostCard({ post, user }) {
  const classes = useStyle();

  return (
    <Paper className={classes.root}>
      <Card>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>{user.name[0]}</Avatar>}
          title={post.title}
          subheader={user.name}
        />
        <CardContent>
          <Typography paragraph>{post.body}</Typography>
        </CardContent>
        <CardActions>
          <IconButton
            aria-label="share"
            onClick={() => alert(`Your link : ${window.location.href}`)}
          >
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Paper>
  );
}
