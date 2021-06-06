const renderDashboard = (req, res) => {
  try {
    console.log("dashboard");
    res.redirect("dashboard");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

module.exports = { renderDashboard };
