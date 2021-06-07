const { Post, User, Comment } = require("../../models");

const getAllPosts = async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }, { model: Comment }],
    });
    const posts = postData.map((post) => {
      const newPost = post.get({ plain: true });
      const newBody = newPost.body.split(".").slice(0, 3).join(".");
      newPost.body = `${newBody}.`;

      return newPost;
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to get all posts" });
  }
};

const getPostByUser = async (req, res) => {
  try {
    const { userID } = req.session;

    const postData = await Post.findAll(
      { where: { user_id: userID } },
      {
        include: [{ model: User }, { model: Comment }],
      }
    );

    // check if postData exists
    if (!postData) {
      return res.status(404).json({ error: "No posts available" });
    }

    const posts = postData.map((post) => {
      const newPost = post.get({ plain: true });
      const newBody = newPost.body.split(".").slice(0, 3).join(".");
      newPost.body = `${newBody}.`;

      return newPost;
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
