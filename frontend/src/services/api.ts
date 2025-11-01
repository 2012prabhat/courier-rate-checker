import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const checkRates = (data: any) => API.post("/rates", data);
export const fetchHistory = () => API.get("/history");
