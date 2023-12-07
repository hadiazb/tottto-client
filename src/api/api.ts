import axios from "axios";

export const api = axios.create({
  baseURL: 'http://54.82.103.156:8080/api/v1/',
  // timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})