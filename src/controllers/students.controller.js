import { matchedData } from "express-validator";
import { ErrorMessage } from "../utils/handleError.js";
import { pool } from "../database/connection.js";

const getStudents = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM students");
    return res.json({
      status: 200,
      students: rows,
    });
  } catch (error) {
    ErrorMessage(res, "Not exist students", 404);
  }
};
const getStudentById = async (req, res) => {
  try {
    const bodySanitized = matchedData(req);
    const id = parseInt(bodySanitized.id);
    const { rows } = await pool.query(
      "SELECT s.id AS id_user,s.name AS name,CASE WHEN COUNT(p.id) > 0 THEN ARRAY_AGG(JSONB_BUILD_OBJECT('payment_id', p.id,'amount', p.amount)) ELSE '{}'::JSONB[] END AS payments FROM students AS s LEFT JOIN payments AS p ON s.id = p.user_id WHERE s.id = $1 GROUP BY s.id, s.name;",
      [id]
    );
    if (rows.length === 0) return ErrorMessage(res, "User not found", 404);
    return res.json({
      status: 200,
      student: rows[0],
    });
  } catch (error) {
    ErrorMessage(res, "Student not found", 404);
  }
};
const createStudent = async (req, res) => {
  try {
    const bodySanitized = matchedData(req);
    const { name } = bodySanitized;
    await pool.query("INSERT INTO students (name) VALUES($1)", [name]);
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
    await pool.query("DELETE FROM students WHERE id=$1", [id]);
    return res.status(204).json({
      status: 204,
      message: "Student deleted successfully",
    });
  } catch (error) {
    ErrorMessage(res, "Error when trying to delete student", 500);
  }
};

export { getStudents, getStudentById, createStudent, deleteStudent };
