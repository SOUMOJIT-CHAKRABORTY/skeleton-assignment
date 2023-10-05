import express from "express";
import { Request, Response } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import userRouter from "./routers/userRouters.ts";
import dotenv from "dotenv";
const app = express();
const port = 8000;

dotenv.config({
  path: "./config.env",
});

app.use(cors());
app.use(express.json());

const Database = process.env.DATABASE_URI ? process.env.DATABASE_URI : "";

mongoose
  .connect(Database)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("not connected", err));

app.use("/users", userRouter);

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server! `,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
