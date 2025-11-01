import { useEffect, useState } from "react";
import { fetchHistory } from "../services/api";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Divider,
} from "@mui/material";

interface CourierResult {
  courier: string;
  rate: number;
  eta: string;
}

interface HistoryItem {
  pickupPincode: string;
  deliveryPincode: string;
  weight: number;
  serviceType: string;
  results: CourierResult[];
  createdAt: string;
}

export default function HistoryList({ history }: { history: any[] }) {
  const [selected, setSelected] = useState<HistoryItem | null>(null);

 
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
        Rate Check History
      </Typography>

      <Grid container spacing={2}>
        {history.map((h, i) => (
          <Grid key={i}>
            <Card
              onClick={() => setSelected(h)}
              sx={{
                cursor: "pointer",
                "&:hover": { boxShadow: 4, transform: "scale(1.01)" },
                transition: "0.2s",
              }}
            >
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {h.pickupPincode} → {h.deliveryPincode} ({h.weight}kg)
                </Typography>
                <Typography variant="body2">Service: {h.serviceType}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Checked: {new Date(h.createdAt).toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for Details */}
      <Dialog open={!!selected} onClose={() => setSelected(null)} fullWidth>
        <DialogTitle>Shipment Details</DialogTitle>
        <DialogContent dividers>
          {selected && (
            <>
              <Typography><b>Pickup Pincode:</b> {selected.pickupPincode}</Typography>
              <Typography><b>Delivery Pincode:</b> {selected.deliveryPincode}</Typography>
              <Typography><b>Weight:</b> {selected.weight} kg</Typography>
              <Typography><b>Service Type:</b> {selected.serviceType}</Typography>
              <Typography color="text.secondary" sx={{ mt: 2 }}>
                Checked on: {new Date(selected.createdAt).toLocaleString()}
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Typography variant="h6" gutterBottom>
                Courier Rates
              </Typography>

              {selected.results.map((r, idx) => (
                <Card key={idx} sx={{ mb: 1, p: 1 }}>
                  <Typography><b>{r.courier}</b></Typography>
                  <Typography>Rate: ₹{r.rate}</Typography>
                  <Typography>ETA: {r.eta}</Typography>
                </Card>
              ))}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelected(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
