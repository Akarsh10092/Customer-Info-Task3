import express from "express";
import dotenv from "dotenv";
import userRoute from "./user.js";

const app = express();
export default app;

dotenv.config({
  path: "./config.env",
});

app.use("/api/customers", userRoute);
