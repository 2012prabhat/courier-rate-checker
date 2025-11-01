import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function RateTable({ results }: { results: any[] }) {
  const [visible, setVisible] = useState(true);

  if (!results.length || !visible) return null;

  return (
    <Paper sx={{ mt: 4, p: 2, position: "relative" }}>
      {/* Header Row */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h6">Available Couriers</Typography>
        <IconButton
          size="small"
          onClick={() => setVisible(false)}
          sx={{ color: "grey.600" }}
        >
          {/* <CloseIcon   sx={{ color: "red" }} />  */}
        </IconButton>
      </Box>

      {/* Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Courier</TableCell>
            <TableCell>Rate (₹)</TableCell>
            <TableCell>ETA</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((r, i) => (
            <TableRow key={i}>
              <TableCell>{r.courier}</TableCell>
              <TableCell>{r.rate}</TableCell>
              <TableCell>{r.eta}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
