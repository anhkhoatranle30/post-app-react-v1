import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Paper, Grid, Typography, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  blue: {
    backgroundColor: indigo[600],
  },
}));

export default function Post({ post }) {
  const classes = useStyles();

  const user = useSelector((state) =>
    state.users.find((user) => user.id === post.userId)
  );

  return (
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap">
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          xs={2}
        >
          {user && (
            <>
              <Avatar className={classes.blue}>{user.name[0]}</Avatar>
              <Typography variant="h6">{user.name}</Typography>
            </>
          )}
        </Grid>
        <Grid item xs zeroMinWidth>
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body1">{post.body}</Typography>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to={`/posts/${post.id}`}
          >
            Go to post
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
