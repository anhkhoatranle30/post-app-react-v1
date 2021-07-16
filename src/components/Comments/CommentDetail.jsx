import React from "react";
import {
  Typography,
  Paper,
  Card,
  CardHeader,
  Avatar,
  CardContent,
} from "@material-ui/core";

export default function CommentDetail({ comment }) {
  return (
    <Paper m={2}>
      <Card>
        <CardHeader
          avatar={<Avatar>{comment.email[0]}</Avatar>}
          title={comment.email}
          subheader={comment.name}
        />
        <CardContent>
          <Typography paragraph>{comment.body}</Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}
