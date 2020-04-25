import axios from "axios";
import { config } from "../config.js";

const apiCall = ({ url, method, data}) =>
  axios({
    method: method,
    url: config.apiUrl + url,
    data: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("user-token")
    }
  })

export default apiCall;
