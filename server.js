const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// API endpoint
app.get("/courses", (req, res) => {
  res.json([
    { id: 1, title: "DevOps Fundamentals", students: 120 },
    { id: 2, title: "Cloud Computing", students: 95 },
    { id: 3, title: "Kubernetes Basics", students: 150 }
  ]);
});

// Load simulator for autoscaling
app.get("/load", (req, res) => {
  const start = Date.now();
  while (Date.now() - start < 500) {}
  res.send("High load generated");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
