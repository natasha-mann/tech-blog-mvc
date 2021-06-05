const getAllPosts = (req, res) => {
  res.send("all posts");
};

const getPost = (req, res) => {
  res.send("one post");
};

const createPost = (req, res) => {
  res.send("create post");
};

const updatePost = (req, res) => {
  res.send("update post");
};

const deletePost = (req, res) => {
  res.send("delete post");
};

module.exports = { getAllPosts, getPost, createPost, updatePost, deletePost };
