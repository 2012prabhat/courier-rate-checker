import { useState } from "react";
import { TextField, Button, MenuItem, Box } from "@mui/material";
import { checkRates, fetchHistory } from "../services/api";

interface RateFormProps {
  onResult: (data: any[]) => void;     // for showing courier rates
  setHistory: (data: any[]) => void;   // 👈 to refresh history list
}

export default function RateForm({ onResult, setHistory }: RateFormProps) {
  const [form, setForm] = useState({
    pickupPincode: "",
    deliveryPincode: "",
    weight: "",
    serviceType: "Standard",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1️⃣ Call backend to calculate courier rates
    const res = await checkRates(form);
    onResult(res.data);

    // 2️⃣ Refresh history list right after submission
    const historyRes = await fetchHistory();
    setHistory(historyRes.data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "grid", gap: 2, maxWidth: 400, mx: "auto", mt: 4 }}
    >
      <TextField
        label="Pickup Pincode"
        name="pickupPincode"
        value={form.pickupPincode}
        onChange={handleChange}
        required
      />
      <TextField
        label="Delivery Pincode"
        name="deliveryPincode"
        value={form.deliveryPincode}
        onChange={handleChange}
        required
      />
      <TextField
        label="Weight (kg)"
        name="weight"
        type="number"
        value={form.weight}
        onChange={handleChange}
        required
      />
      <TextField
        select
        label="Service Type"
        name="serviceType"
        value={form.serviceType}
        onChange={handleChange}
      >
        <MenuItem value="Standard">Standard</MenuItem>
        <MenuItem value="Express">Express</MenuItem>
      </TextField>

      <Button type="submit" variant="contained">
        Check Rates
      </Button>
    </Box>
  );
}
