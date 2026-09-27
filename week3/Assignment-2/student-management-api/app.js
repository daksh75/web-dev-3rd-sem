// app.js
// Main entry point: sets up the Express server, middleware, and routes

const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Built-in middleware to parse JSON request bodies
app.use(express.json());

// Custom logger middleware (logs method, URL, and timestamp for every request)
app.use(logger);

// Health check / root route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Student Management REST API is running.",
    endpoints: [
      "GET /students",
      "GET /students/:id",
      "POST /students",
      "PUT /students/:id",
      "DELETE /students/:id",
    ],
  });
});

// Mount student routes under /students
app.use("/students", studentRoutes);

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found.`,
  });
});

// Centralized error-handling middleware (catches errors passed via next(err))
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
