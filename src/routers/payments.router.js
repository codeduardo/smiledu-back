import express from "express";
import { createPayment } from "../controllers/index.js";
import { createPaymentValidator } from "../middlewares/validators/payment.js";

const Router = express.Router();

Router.post("/", createPaymentValidator, createPayment);

export default Router;
