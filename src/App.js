import { React, useEffect } from "react";
// Using Material UI
// Container: The container centers your content horizontally. It's the most basic layout element.
// AppBar: The App Bar displays information and actions relating to the current screen.
// Typography: The Typography component enables you to present your design and content as clearly and efficiently as possible.
// Grow: The Grow component animates its child to grow and shrink smoothly, the way it's commonly used is by wrapping an Input.
// Grid: The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts.js";
import memories from "./Images/memories.png";
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/form.js";
import useStyles from "./styles.js";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch">
            {/* Grid is used to create a responsive layout */}
            {/* xs: extra small, sm: small, md: medium, lg: large, xl: extra large */}
            {/* xs={12} means occupy full width in small devices. */}
            {/* Grid item is used to create a grid item */}
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
