import React from "react";
import Post from "./Post/Post.js";
import useStyles from "./styles.js";
import { Grid, CircularProgress } from "@material-ui/core";

//Use the useSelector hook to access the posts from the global state. Then, map through the posts and render a Post component for each post. The Post component will be created in the next step.
import { useSelector } from "react-redux";

const Posts = () => {
  const classes = useStyles();

  const posts = useSelector(state => state.posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map(post => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
