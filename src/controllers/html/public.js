const { Post, User, Comment } = require("../../models");

const renderHome = async (req, res) => {
  try {
    const { userId } = req.session;
    const postData = await Post.findAll({
      include: [{ model: User }, { model: Comment }],
    });
    const posts = postData.map((post) => {
      return post.get({ plain: true });
    });
    res.render("home", { userId, posts });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

const renderLogin = (req, res) => {
  try {
    res.render("login", {
      layout: "login",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

const renderSignup = (req, res) => {
  try {
    res.render("signup", {
      layout: "signup",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

module.exports = { renderHome, renderLogin, renderSignup };
