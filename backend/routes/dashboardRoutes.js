const dashboardRoutes = require("express").Router();
const protect = require("../middleware/AuthToken");
const {
  solana_wallet,
  create_solana_db,
} = require("../controllers/dashboardController");

dashboardRoutes
  .route("/wallet")
  .get(protect, solana_wallet)
  .post(protect, create_solana_db);

module.exports = dashboardRoutes;
