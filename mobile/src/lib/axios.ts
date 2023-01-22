import axios from "axios";

export const api = axios.create({
  baseURL: "https://8178-189-120-79-97.sa.ngrok.io",
  headers: {
    "ngrok-skip-browser-warning": true,
  },
});
