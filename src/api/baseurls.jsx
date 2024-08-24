import axios from "axios";

export const oliviaApi = axios.create({
  baseURL: "https://api-staging.olivia-stores.com/api/olivia",
});
