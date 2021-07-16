import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

export default function PostLoading() {
  const classes = useStyles();

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
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
          <Typography variant="h6">
            <Skeleton width={100} />
          </Typography>
        </Grid>
        <Grid item xs zeroMinWidth>
          <Typography variant="h6">
            <Skeleton />
          </Typography>
          <Typography variant="body1">
            <Skeleton />
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
