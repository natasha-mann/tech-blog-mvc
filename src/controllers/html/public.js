const renderHome = (req, res) => {
  try {
    res.render("home");
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
