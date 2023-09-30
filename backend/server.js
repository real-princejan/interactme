// config env
require("dotenv").config();

const colors = require("colors");
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

// Connect to Mongo Database
connectDB();

// rest
const app = express();

// rest api
app.use(express.json());

app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/private", require("./routes/privateRoute"));

// Error Handler
app.use(errorHandler);

// port
const PORT = process.env.PORT || 8080;

// run listen
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgWhite.white);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
