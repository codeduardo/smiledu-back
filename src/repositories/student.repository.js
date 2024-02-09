import { pool } from "../database/connection.js";

const createStudentRepository = async (payData) => {
  const sql = "SELECT * FROM students";
  const { rows } = await pool.query(sql);
  return rows;
};
const getByIdRepository = async (id) => {
  const { rows: payments } = await pool.query(
    "SELECT * FROM payments WHERE user_id = $1",
    [id]
  );
  const sql = "SELECT * FROM students WHERE id = $1";
  const { rows } = await pool.query(sql, [id]);
  return { ...rows[0], payments };
};

const createRepository = async (name) => {
  const sql = "INSERT INTO students (name) VALUES($1)";
  await pool.query(sql, [name]);
};
const deleteRepository = async (id) => {
  const sql = "DELETE FROM students WHERE id=$1";
  await pool.query(sql, [id]);
};

export {
  createStudentRepository,
  getByIdRepository,
  createRepository,
  deleteRepository,
};
