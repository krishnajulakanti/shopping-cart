import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { API_BASE_URL } from '../constants';

/**
 * API Client
 * Centralized HTTP client with interceptors
 */
class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // Add auth token if available (only for local API calls)
        if (!config.url?.startsWith('http')) {
          const token = localStorage.getItem('token');
          if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        // Handle common errors
        if (error.response) {
          // Server responded with error status
          return Promise.reject(error);
        } else if (error.request) {
          // Request made but no response
          return Promise.reject(new Error('Network error. Please check your connection.'));
        } else {
          // Something else happened
          return Promise.reject(error);
        }
      }
    );
  }

  /**
   * GET request
   * Supports both relative URLs (uses baseURL) and absolute URLs (external APIs)
   */
  async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    // For external URLs, create a new axios instance without baseURL
    if (url.startsWith('http://') || url.startsWith('https://')) {
      const response: AxiosResponse<T> = await axios.get(url, config);
      return response.data;
    }
    
    // For local URLs, use the configured client
    const response: AxiosResponse<T> = await this.client.get(url, config);
    return response.data;
  }

  /**
   * POST request
   */
  async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.post(url, data, config);
    return response.data;
  }

  /**
   * PUT request
   */
  async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.put(url, data, config);
    return response.data;
  }

  /**
   * PATCH request
   */
  async patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.patch(url, data, config);
    return response.data;
  }

  /**
   * DELETE request
   */
  async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.delete(url, config);
    return response.data;
  }
}

// Export singleton instance
export const apiClient = new ApiClient();
