import { body } from "express-validator";
import { handleValidator } from "../../utils/handleValidator.js";

export const createPaymentValidator = [
  body("amount").exists().notEmpty(),
  body("user_id").exists().notEmpty(),
  handleValidator,
];
