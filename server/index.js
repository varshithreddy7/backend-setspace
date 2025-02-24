const express = require("express");
const cors = require("cors");
const routes = require("../src/routes"); // Import routes

const app = express();
app.use(cors());
app.use(express.json());

// Use routes
app.use("/api", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
