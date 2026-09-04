const express = require("express");
const mongoose = require("mongoose");

const app = express();

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

const Blog = mongoose.model("Blog", blogSchema);

const mongoUrl =
  "mongodb+srv://khoirudinayub971_db_user:b8rCTZRL6zD5Wtop@cluster0.tss6dv8.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUrl, { family: 4 });

app.use(express.json());

app.get("/api/blogs", (req, res) => {
  Blog.find({}).then((blogs) => {
    res.json(blogs);
  });
});

app.post("/api/blogs", (req, res) => {
  const blog = new Blog(req.body);

  blog.save().then((result) => {
    res.status(200).json(result);
  });
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
