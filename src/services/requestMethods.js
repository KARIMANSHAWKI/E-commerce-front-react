import axios from "axios";

const BASE_URL = "http://localhost:5500/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzIxZTY0N2JkMjI4NGUyNDQ1MDM3ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTYyNjA3MCwiZXhwIjoxNjM1ODg1MjcwfQ.Le6HZDEdsS4RFbV6fm2hxmQMjc47929pf-TsIrdV9s8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: `Bearer ${TOKEN}`,
});
