import axios from "axios";

const publicAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
const privateAxios = axios.create({});

export { publicAxios };
