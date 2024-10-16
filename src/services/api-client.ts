import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

const tok = "admin:password";
const hash = "YWRtaW46cGFzc3dvcmQ="; //Base64.encode(tok);
const Basic = "Basic YWRtaW46cGFzc3dvcmQ="; //'Basic ' + hash;
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
     Authorization: Basic ,
     'Content-Type': 'application/json',
    
    },
});

export class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  post = (data: T) => {
    return axiosInstance.post(this.endpoint, data).then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;

// export default axios.create({
//     baseURL: 'https://api.rawg.io/api',
//     // headers: {
//     //     Authorization: ''
//     // }
// })
