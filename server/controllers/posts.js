import PostMessage from "../models/postsMessageDB.js";

// Get all posts
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create a post
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Update a post
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  // req.body contains the updated post
  const post = req.body;
  // Check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");
  // Update the post
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true
  });
  res.json(updatedPost);
};

// Delete a post
export const deletePost = async (req, res) => {
  const { id } = req.params;
  // Check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");
  // Delete the post
  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "Post deleted successfully" });
};
