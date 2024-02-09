import { matchedData } from "express-validator";
import { ErrorMessage } from "../utils/handleError.js";
import { pool } from "../database/connection.js";
import {
  createStudentRepository,
  getByIdRepository,
  createRepository,
  deleteRepository,
} from "../repositories/student.repository.js";

const getStudents = async (req, res) => {
  try {
    const students = await createStudentRepository();
    return res.json({
      status: 200,
      students,
    });
  } catch (error) {
    ErrorMessage(res, "Not exist students", 404);
  }
};
const getStudentById = async (req, res) => {
  try {
    const bodySanitized = matchedData(req);
    const id = parseInt(bodySanitized.id);
    const student = await getByIdRepository(id);
    if (!student) return ErrorMessage(res, "User not found", 404);
    return res.json({
      status: 200,
      student,
    });
  } catch (error) {
    ErrorMessage(res, "Student not found", 404);
  }
};
const createStudent = async (req, res) => {
  try {
    const bodySanitized = matchedData(req);
    const { name } = bodySanitized;
    await createRepository(name);
    return res.status(201).json({
      status: 201,
      message: "Student created successfully",
    });
  } catch (error) {
    ErrorMessage(res, "Error when trying to create student", 400);
  }
};
const deleteStudent = async (req, res) => {
  try {
    const bodySanitized = matchedData(req);
    const id = parseInt(bodySanitized.id);
    await deleteRepository(id);
    return res.status(204).json({
      status: 204,
      message: "Student deleted successfully",
    });
  } catch (error) {
    ErrorMessage(res, "Error when trying to delete student", 500);
  }
};

export { getStudents, getStudentById, createStudent, deleteStudent };
