import mongoose from "mongoose";

const rateCheckSchema = new mongoose.Schema({
  pickupPincode: String,
  deliveryPincode: String,
  weight: Number,
  serviceType: String,
  results: Array,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("RateCheck", rateCheckSchema);
