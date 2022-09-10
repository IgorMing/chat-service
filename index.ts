import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("testing service... hehe");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
