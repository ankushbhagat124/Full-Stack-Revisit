import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";

const app = express();

//Body Parser dependeny to parse the incoming request bodies in a middleware before your handlers, available under the req.body property.
// Using for Image upload
app.use(bodyParser.json({ limit: "30mb", extended: true }));
// Using for URL encoded data
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(cors());

// MongoDB Atlas Connection URL
const CONNECTION_URL =
  "mongodb+srv://ankushbhagat14:ankushbhagat14@cluster0.hrxk3fr.mongodb.net";

const PORT = process.env.PORT || 5000;

//Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch(error => console.log(error.message));

// Post Routes
app.use("/posts", postRoutes);
