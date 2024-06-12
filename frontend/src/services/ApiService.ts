// src/services/ApiService.ts
import axios, { AxiosInstance } from 'axios';

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public async get(endpoint: string): Promise<any> {
    const response = await this.axiosInstance.get(endpoint);
    return response.data;
  }
}

export default ApiService;