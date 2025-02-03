import express from "express";
import { createReceiver, getReceivers } from "../controllers/receiverController.js";

const router = express.Router();

router.post("/", createReceiver);
router.get("/gett", getReceivers);

export default router;
