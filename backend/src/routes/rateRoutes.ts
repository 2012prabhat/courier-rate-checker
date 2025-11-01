import express from "express";
import { calculateRates, getHistory } from "../controllers/rateController";

const router = express.Router();

router.post("/rates", calculateRates);
router.get("/history", getHistory);

export default router;
