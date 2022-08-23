import axios from "axios";

const API_ROOT = "http://localhost:5000";

export const client = axios.create({
  baseURL: API_ROOT,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const getStudents = async () => {
  return await client.get("/students");
};
