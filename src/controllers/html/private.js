const { User, Post, Comment } = require("../../models");

const renderDashboard = async (req, res) => {
  try {
    const { userId, firstName, lastName } = req.session;

    const postData = await Post.findAll({
      where: { user_id: userId },
      include: [{ model: User }, { model: Comment }],
    });

    const posts = postData.map((post) => {
      const newPost = post.get({ plain: true });
      const newBody = newPost.body.split(".").slice(0, 3).join(".");
      newPost.body = `${newBody}.`;

      return newPost;
    });

    return res.render("dashboard", {
      layout: "dashboard",
      firstName,
      lastName,
      posts,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to render" });
  }
};

const renderCreatePost = (req, res) => {
  try {
    const { firstName } = req.session;
    res.render("create-post", { layout: "dashboard", firstName });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

module.exports = { renderDashboard, renderCreatePost };
