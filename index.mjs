import express from "express";
require('dotenv').config();
console.log(process.env.MONGODB_URI);

const PORT = 3000;
const app = express();

import grades from "./routes/grades.mjs";
import grades_agg from "./routes/grades_agg.mjs";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World.");
});

app.use("/grades", grades);
app.use("/grades", grades_agg);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(3000, () => {
  console.log(`Server is running on port: ${PORT}`);
});
