const { User } = require("../../models");

const createUser = async (req, res) => {
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

module.exports = { createUser };
