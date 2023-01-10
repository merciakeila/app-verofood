import axios from "axios";

const baseUrl = 'http://cloud.dbasuporte.com:8099/api/';

export const api = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {'Accept': '*/*'}
});