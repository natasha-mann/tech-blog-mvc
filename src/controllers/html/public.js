const { Post, User, Comment } = require("../../models");

const renderHome = async (req, res) => {
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

    res.render("home", { posts });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

const renderLogin = (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

const renderSignup = (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

module.exports = { renderHome, renderLogin, renderSignup };
