import { pool } from "../database/connection.js";

const createPay = async (payData) => {
  const sql = "INSERT INTO payments (amount,user_id) VALUES($1,$2)";
  await pool.query(sql, [payData.amount, payData.user_id]);
};

export { createPay };
