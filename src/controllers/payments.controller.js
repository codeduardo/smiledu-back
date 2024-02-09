import { matchedData } from "express-validator";
import { ErrorMessage } from "../utils/handleError.js";
import { createPay } from "../repositories/payment.repository.js";

const createPayment = async (req, res) => {
  try {
    const bodySanitized = matchedData(req);
    const { amount, user_id } = bodySanitized;

    await createPay({ amount, user_id });
    return res.status(201).json({
      status: 201,
      message: "Payment created successfully",
    });
  } catch (error) {
    ErrorMessage(res, "Error when trying to create payment", 400);
  }
};

export { createPayment };
