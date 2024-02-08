import express from "express";
import {
  createStudent,
  deleteStudent,
  getStudentById,
  getStudents,
} from "../controllers/index.js";
import { createStudentValidator } from "../middlewares/validators/student.js";
import { idValidator } from "../utils/handleValidator.js";

const Router = express.Router();

Router.get("/", getStudents);
Router.get("/:id", idValidator, getStudentById);
Router.post("/", createStudentValidator, createStudent);
Router.delete("/:id", idValidator, deleteStudent);

export default Router;
