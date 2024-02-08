import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import apiRoutes from "./routers/index.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRoutes);

export { app };
