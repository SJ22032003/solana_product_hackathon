const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = 5000 || process.env.PORT;
const authRouter = require("./routes/authRoutes");
const dashboardRouter = require("./routes/dashboardRoutes");
const connectDB = require("./config/db");

// connectDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", authRouter);
app.use("/api/dashboard", dashboardRouter);

// Listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
