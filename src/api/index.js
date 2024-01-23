// Desc: API calls
// Axios: Promise based HTTP client for the browser and node.js
import axios from "axios";

const url = "http://localhost:5000/posts";

// Fetch all posts
export const fetchPosts = () => axios.get(url);
export const createPost = newPost => axios.post(url, newPost);
