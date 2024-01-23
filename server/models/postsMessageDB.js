import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String], // Array of Strings
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date() // Date.now() will return the current timestamp
  }
});

// Turn the schema into a model
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
