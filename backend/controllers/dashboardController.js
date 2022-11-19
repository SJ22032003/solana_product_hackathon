const Dashboard = require("../models/DashboardModel");
const errorHandler = require("../middleware/ErrorHandler");
const Moralis = require("moralis");
const { SolNetwork, SolAddress } = require("@moralisweb3/sol-utils");

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
};

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

const my_wallet = async (req, res) => {
  // const { network, address } = req.body;
  try {
    await Moralis.start({
      apiKey: "UhwGU2l77yrKt5LxSM7xWsZzibd58lLsNNlXzPRZOCePxj5pZMa2W6CCFdPm9YNy",
    });

    const address = SolAddress.create(
      "HsXZnF7Te7dZ5ijvGcDj3NWtxRBBaAuYQgh1oZLwAba2"
    );

    const network = SolNetwork.MAINNET;

    const response = await Moralis.SolApi.account.getBalance({
      network: "devnet",
      address: "HsXZnF7Te7dZ5ijvGcDj3NWtxRBBaAuYQgh1oZLwAba2",
    });

    res.json(response?.toJSON());
    next();
  } catch (e) {
    console.error(e);
  }
};

module.exports = { solana_wallet, create_solana_db, my_wallet };
