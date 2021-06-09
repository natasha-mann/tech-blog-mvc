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

const createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const { userId } = req.session;

    if (!userId) {
      return res.status(404).json({ error: "User is not logged in" });
    }

    if (!title || !body) {
      return res.status(404).json({ error: "Unable to add a post" });
    }

    const newPost = await Post.create({
      title,
      body,
      user_id: userId,
    });

    res.status(200).json({ success: "Post added successfully." });
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to create a post",
    });
  }
};

const updatePost = (req, res) => {
  res.send("update post");
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Post.destroy({
      where: {
        id,
      },
    });

    if (!data) {
      return res.status(404).json({ error: "Post does not exist" });
    }

    return res.status(200).json({ success: "Delete successful" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Failed to delete post" });
  }
};

module.exports = { getAllPosts, getPost, createPost, updatePost, deletePost };
