import { Router } from "express";
import {
  createOrder,
  receiveWebhook,
} from "./payment.controller.js";

const router = Router();

router.post("/create-order", createOrder);

router.post("/webhook", receiveWebhook);

router.get("/success", (req, res) => res.send("Success"));

export default router;
