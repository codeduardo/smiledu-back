import { body } from "express-validator";
import { handleValidator } from "../../utils/handleValidator.js";

export const createStudentValidator = [
  body("name").exists().notEmpty(),
  handleValidator,
];
