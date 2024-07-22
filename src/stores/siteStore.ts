import { defineStore } from 'pinia';
import apiService from '@/services/api';
import { ItemParams, Site } from '@/types';

export const useSiteStore = defineStore('site', {
  state: () => ({
    sites: [] as Site[],
    site: null as Site | null,
    page: 1,
    searchQuery: '',
    totalPages: 1,
  }),
  actions: {
    async fetchSites(params: { _page: number; _limit: number; q?: string }) {
        try {
          const response = await apiService.getSites(params);
          console.log('API Response:', response);
          this.sites = response.data;
          this.totalPages = Math.ceil(Number(response.headers['x-total-count']) / params._limit);
        } catch (error) {
          console.error('Error fetching sites:', error);
        }
      },
    async fetchSite(id: ItemParams) {
      try {
        const response = await apiService.getSiteById(id);
        this.site = response.data;
      } catch (error) {
        console.error('Error fetching site:', error);
      }
    },
    setSearchQuery(query: string) {
        this.searchQuery = query;
        this.page = 1; 
      },
    setPage(page: number) {
      this.page = page;
    },
  },
});