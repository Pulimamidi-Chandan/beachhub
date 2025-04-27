const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const stateRoutes = require("./routes/stateRoutes");
const beachRoutes = require("./routes/beachRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/states", stateRoutes);
app.use("/api/beaches", beachRoutes);

// ----------------- Serve Frontend -----------------
const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname1, "client", "dist", "index.html"));
});
// ---------------------------------------------------

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
