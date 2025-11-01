import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import RateForm from "./RateForm";
import RateTable from "./RateTable";
import HistoryList from "./HistoryList";
import { fetchHistory } from "../services/api";

export default function App() {
  const [results, setResults] = useState<any[]>([]);
    const [history, setHistory] = useState<any[]>([]);

  const loadHistory = async () => {
    const res = await fetchHistory();
    setHistory(res.data);
  };

    useEffect(() => {
    loadHistory();
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Courier Rate Checker 🚚
      </Typography>
      <RateForm onResult={setResults} setHistory={setHistory} />
      <RateTable results={results} />
      <HistoryList history={history} />
    </Container>
  );
}
