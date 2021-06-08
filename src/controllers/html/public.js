const { Post, User, Comment } = require("../../models");

const renderHome = async (req, res) => {
  try {
    const { isLoggedIn } = req.session;
    const postData = await Post.findAll({
      include: [{ model: User }, { model: Comment }],
    });
    const posts = postData.map((post) => {
      return post.get({ plain: true });
    });
    res.render("home", { isLoggedIn, posts });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

const renderPost = async (req, res) => {
  try {
    const { isLoggedIn } = req.session;
    const { id } = req.params;

    // WHEN USING FINDONE WITHOUT MAP, SHORTENBODY HANDLER DOESNT WORK??

    const postData = await Post.findAll({
      where: { id },
      include: [{ model: User }, { model: Comment }],
    });
    const posts = postData.map((post) => {
      return post.get({ plain: true });
    });

    res.render("post", { isLoggedIn, posts });
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

module.exports = { renderHome, renderPost, renderLogin, renderSignup };
