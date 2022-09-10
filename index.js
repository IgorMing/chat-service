import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("testing service...");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});