import axios, { AxiosResponse } from 'axios';

export interface FetcherConfig {
  params?: { [key: string]: string };
  headers?: { [key: string]: string };
}

export class ClientFetcher {
  static defaultHeaders = {
    'Content-Type': 'application/json',
  };
  static get(url: string, config: FetcherConfig): Promise<AxiosResponse> {
    const params = config.params || {};
    const headers = config.headers || ClientFetcher.defaultHeaders;
    return axios.get(url, { params, headers });
  }

  static post(url: string, body: any, config: FetcherConfig): Promise<AxiosResponse> {
    const headers = config.headers || ClientFetcher.defaultHeaders;
    return axios.post(url, body, { headers });
  }

  static put(url: string, body: any, config: FetcherConfig): Promise<AxiosResponse> {
    const headers = config.headers || ClientFetcher.defaultHeaders;
    return axios.put(url, body, { headers });
  }

  static patch(url: string, body: any, config: FetcherConfig): Promise<AxiosResponse> {
    const headers = config.headers || ClientFetcher.defaultHeaders;
    return axios.patch(url, body, { headers });
  }

  static delete(url: string, config: FetcherConfig): Promise<AxiosResponse> {
    const headers = config.headers || ClientFetcher.defaultHeaders;
    return axios.delete(url, { headers });
  }
}
