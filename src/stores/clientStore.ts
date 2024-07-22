import { defineStore } from 'pinia';
import apiService from '@/services/api';
import { Client } from '@/types';

export const useClientStore = defineStore('client', {
  state: () => ({
    clients:  [] as Client[],
    page: 1,
    searchQuery: '',
    totalPages: 1,
    filter: 'All Sites',
  }),
  actions: {
    async fetchClients(params?: { _page?: number; _limit?: number; q?: string; filter?: string }) {
      try {
        const response = await apiService.getClients({ 
          _page: params?._page || this.page, 
          _limit: params?._limit || 10,
          q: params?.q || this.searchQuery,
          filter: params?.filter || (this.filter !== 'All Sites' ? this.filter : undefined)
        });
        this.clients = response.data;
        this.totalPages = Math.ceil(Number(response.headers['x-total-count']) / (params?._limit || 10));
      } catch (error) {
      }
    },
    setSearchQuery(query: string) {
      this.searchQuery = query;
      this.page = 1;
      this.fetchClients();
    },
    setPage(page: number) {
      this.page = page;
    },
    setFilter(filter: string) {
      this.filter = filter;
      this.page = 1;
      this.fetchClients();
    },
  },
});