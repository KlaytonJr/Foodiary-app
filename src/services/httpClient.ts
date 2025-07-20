import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://b41upwz2g4.execute-api.us-east-1.amazonaws.com",
});
