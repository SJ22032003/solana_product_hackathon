const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  authorized: {
    type: Boolean,
    required: true,
    default: false,
  },
  address: {
    type: String,
    required: true,
    default: "",
  },
  network: {
    type: String,
    required: true,
    default: "",
  },
});

const Dashboard = mongoose.model("dashboard", dashboardSchema);
module.exports = Dashboard;