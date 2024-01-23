import express from "express";
// To improve the code readability, we will create a new folder called controllers and move the getPosts function from server/routes/posts.js to server/controllers/posts.js
import { getPosts, createPost } from "../controllers/posts.js";
import { create } from "domain";

const router = express.Router();

// http://localhost:5000/posts
router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
export default router;
