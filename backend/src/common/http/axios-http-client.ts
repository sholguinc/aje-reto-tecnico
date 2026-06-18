import { AxiosInstance } from 'axios';
import { HttpClient } from './http-client';

export class AxiosHttpClient implements HttpClient {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  async get<T>(path: string): Promise<T> {
    const response = await this.axiosInstance.get<T>(path);
    return response.data;
  }

  async post<T, B = unknown>(path: string, body: B): Promise<T> {
    const response = await this.axiosInstance.post<T>(path, body);
    return response.data;
  }

  async put<T, B = unknown>(path: string, body: B): Promise<T> {
    const response = await this.axiosInstance.put<T>(path, body);
    return response.data;
  }

  async patch<T, B = unknown>(path: string, body: B): Promise<T> {
    const response = await this.axiosInstance.patch<T>(path, body);
    return response.data;
  }

  async delete<T>(path: string): Promise<T> {
    const response = await this.axiosInstance.delete<T>(path);
    return response.data;
  }
}
