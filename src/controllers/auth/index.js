const { User } = require("../../models");

const login = async (req, res) => {
  //  post body
  // {
  //   email: "george.brown@email.com",
  //   password: "password456";
  // }

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
      return res.redirect("/dashboard");
    });
  } catch (error) {
    console.error(error.message);
  }
};
const logout = (req, res) => {
  res.send("logout");
};

module.exports = { login, logout };
