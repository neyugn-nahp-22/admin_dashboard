import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const get = async (url, options = {}) => {
  const res = await httpRequest.get(url, options);
  return res.data;
};

export default httpRequest;
