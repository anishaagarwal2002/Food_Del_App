import express from "express";
import authMiddleaware from "../middleware/auth.js"
import { placeOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleaware, placeOrder);

export default orderRouter;