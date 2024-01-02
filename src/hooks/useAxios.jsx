import axios from "axios";

export const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8090/api/",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });

  return {
    axios: axiosInstance,
  };
};
