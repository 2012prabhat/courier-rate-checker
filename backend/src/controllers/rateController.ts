import { Request, Response } from "express";
import RateCheck from "../models/RateCheck";

export const calculateRates = async (req: Request, res: Response) => {
  try {
    const { pickupPincode, deliveryPincode, weight, serviceType } = req.body;

    const base = 50;
    const couriers = [
      { name: "Delhivery", extra: 5, eta: "3 days" },
      { name: "Bluedart", extra: 10, eta: "2 days" },
      { name: "DTDC", extra: 8, eta: "4 days" },
    ];

    const results = couriers.map(c => ({
      courier: c.name,
      rate: base + weight * 10 + c.extra,
      eta: c.eta,
    }));

    const newEntry = new RateCheck({
      pickupPincode,
      deliveryPincode,
      weight,
      serviceType,
      results,
    });
    await newEntry.save();

    res.json(results);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getHistory = async (_req: Request, res: Response) => {
  try {
    const history = await RateCheck.find().sort({ createdAt: -1 }).limit(10);
    res.json(history);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
