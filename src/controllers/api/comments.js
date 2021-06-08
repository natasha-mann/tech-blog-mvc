const { Comment } = require("../../models");

const createComment = async (req, res) => {
  try {
    const { message, post_id } = req.body;
    const { userId } = req.session;

    if (!userId) {
      return res.status(404).json({ error: "User is not logged in" });
    }

    if (!message || !post_id) {
      return res.status(404).json({ error: "Unable to add a comment" });
    }

    const newComment = await Comment.create({
      message,
      post_id,
      user_id: userId,
    });

    res.status(200).json({ success: "Comment added successfully." });
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to create a comment",
    });
  }
};

module.exports = { createComment };
