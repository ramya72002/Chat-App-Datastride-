// backend/index.js
// -------------------------------------------------
// Express backend for dynamic tag suggestions
// -------------------------------------------------

const express = require("express");
const cors = require("cors");
const tagsRoute = require("./routes/tags");

const app = express();
const PORT = 7001;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tags", tagsRoute);

// Health Check
app.get("/", (req, res) => {
  res.send("Backend running...");
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
