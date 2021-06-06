const { Post, User, Comment } = require("../../models");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: User }, { model: Comment }],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to get all posts" });
  }
};

const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id, {
      include: [{ model: User }, { model: Comment }],
    });

    if (!post) {
      return res.status(404).json({ error: "Post does not exist" });
    }
    return res.status(200).json(post);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to get post" });
  }
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
