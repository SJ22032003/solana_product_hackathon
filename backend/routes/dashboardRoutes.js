const dashboardRoutes = require("express").Router();
const protect = require("../middleware/AuthToken");
const {
  solana_wallet,
  create_solana_db,
  my_wallet,
} = require("../controllers/dashboardController");

dashboardRoutes
  .route("/wallet")
  .get(protect, solana_wallet)
  .post(protect, create_solana_db);

dashboardRoutes.route("/getadd").get(my_wallet);

module.exports = dashboardRoutes;
