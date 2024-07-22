import { CreateUpdateParams, ItemParams, ListParams } from '@/types';
import axios, { AxiosInstance } from 'axios';

class ApiService {
  private api: AxiosInstance;
  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getClients(params?: ListParams) {
    console.log('API getClients called with params:', params); 
    return this.api.get('/clients', { params });
  }
  
  async getClientById({ id }: ItemParams) {
    return this.api.get(`/clients/${id}`)
  }
  
  async getSites(params?: ListParams) {
    console.log('API getSites called with params:', params); 
    return this.api.get('/sites', { params });
  }
  async getSiteById({ id }: ItemParams) {
    return this.api.get(`/sites/${id}`);
  }
  
  async resetDatabase() {
    return this.api.get('/build-db');
  }
}

const apiService = new ApiService('https://tracktik-challenge.staffr.com');
export default apiService;