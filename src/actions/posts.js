import * as api from "../api";

// Action Creators
// Redux thunk allows us to specify an additional arrow function
// This allows us to specify an async function
// This is the function that will get dispatched
// Dispatch is the function that allows us to dispatch an action
export const getPosts = () => async dispatch => {
  try {
    const { data } = await api.fetchPosts();
    // console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = post => async dispatch => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
