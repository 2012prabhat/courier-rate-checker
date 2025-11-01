import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import rateRoutes from "./routes/rateRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", rateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
