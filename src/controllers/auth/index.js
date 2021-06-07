const { User } = require("../../models");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.redirect("/login");
    }

    const validPassword = await user.isCorrectPassword(password);

    if (!validPassword) {
      return res.redirect("/login");
    }

    req.session.save(() => {
      req.session.isLoggedIn = true;
      return res.sendStatus(200);
    });
  } catch (error) {
    console.error(error.message);
  }
};

const logout = (req, res) => {
  if (req.session.isLoggedIn) {
    req.session.destroy(() => {
      return res.redirect("/");
    });
  } else {
    return res.end();
  }
};

const signup = async (req, res) => {
  try {
    const { first_name, last_name, email, username, password } = req.body;

    if (!first_name || !last_name || !email || !username || !password) {
      console.log(`[ERROR]: Unable to create a user`);
      return res.status(404).json({
        error: "Unable to create a user",
      });
    }

    const newUser = await User.create({
      first_name,
      last_name,
      email,
      username,
      password,
    });
    res.status(200).json({ success: "user created" });
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to create user",
    });
  }
};

module.exports = { login, logout, signup };
