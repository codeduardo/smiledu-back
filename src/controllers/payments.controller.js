import { matchedData } from "express-validator";
import { ErrorMessage } from "../utils/handleError.js";
import { pool } from "../database/connection.js";

const createPayment = async (req, res) => {
  try {
    const bodySanitized = matchedData(req);
    const { amount, user_id } = bodySanitized;
    await pool.query("INSERT INTO payments (amount,user_id) VALUES($1,$2)", [
      amount,
      user_id,
    ]);
    return res.status(201).json({
      status: 201,
      message: "Payment created successfully",
    });
  } catch (error) {
    console.log(error);
    ErrorMessage(res, "Error when trying to create payment", 400);
  }
};

export { createPayment };
