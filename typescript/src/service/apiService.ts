import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

// Default API will be your root
const API_ROOT = "https://jsonplaceholder.typicode.com/";
const TIMEOUT = 20000;
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

interface IApiServiceTypes {
  baseURL?: string;
  timeout?: number;
  headers?: HeadersInit;
}

class ApiService {
  client: AxiosInstance;
  constructor({
    baseURL = API_ROOT,
    timeout = TIMEOUT,
    headers = HEADERS,
  }: IApiServiceTypes) {
    const client = axios.create({
      baseURL,
      timeout,
      headers,
    });

    client.interceptors.response.use(this.handleSuccess, this.handleError);
    this.client = client;
  }

  handleSuccess(response: AxiosResponse) {
    return response;
  }

  handleError(error: AxiosError) {
    return Promise.reject(error);
  }

  get(path: string) {
    return this.client.get(path).then((response) => response.data);
  }

  post(path: string, payload: any) {
    return this.client.post(path, payload).then((response) => response.data);
  }

  put(path: string, payload: any) {
    return this.client.put(path, payload).then((response) => response.data);
  }

  patch(path: string, payload: any) {
    return this.client.patch(path, payload).then((response) => response.data);
  }

  delete(path: string) {
    return this.client.delete(path).then((response) => response.data);
  }
}

export default ApiService;
