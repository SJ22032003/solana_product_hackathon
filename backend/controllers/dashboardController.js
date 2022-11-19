const Dashboard = require("../models/DashboardModel");
const errorHandler = require("../middleware/ErrorHandler");

// @desc  create solana db
// @route POST /api/dashboard/db
// @access Private
const create_solana_db = async (req, res) => {
  try {
    const dashboard = await Dashboard.findOne({ user: req.user.id });
    if (dashboard) {
      return res.status(400).json({ message: "Dashboard already exists" });
    }
    const newDashboard = await Dashboard.create({
      user: req.user.id,
      ...req.body,
    });
    res.status(200).json(newDashboard);
  } catch (error) {
    errorHandler(error, req, res);
  }
}

// @desc  get solana wallet
// @route GET /api/dashboard/wallet
// @access Private
const solana_wallet = async (req, res) => {
  console.log(req.user.id);
  try {
    const dashboard = await Dashboard.find({ user: req.user.id });
    if (dashboard.length === 0 || !dashboard) {
      return res.status(400).json({ message: "No dashboard found" });
    }
    res.status(200).json(dashboard);
  } catch (error) {
    errorHandler(error, req, res);
  }
};

module.exports = { solana_wallet,create_solana_db };
