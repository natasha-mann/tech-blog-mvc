const renderDashboard = (req, res) => {
  try {
    res.render("dashboard", {
      layout: "dashboard",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

module.exports = { renderDashboard };
