<template>
    <div class="container mx-auto p-4">
      <Header :title="'Scheduling'" :showBackButton="true" @goBack="goBack" />
      <SimpleLoader v-if="isLoading" />
      <template v-else-if="site">
        <SiteSummary :site="site" />
        <div class="p-4">
          <SiteInfo :site="site" />
        </div>
      </template>
      <div v-else class="p-4">
        <p>No site data available.</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import apiService from '@/services/api';
  import Header from '@/components/Header.vue';
  import SiteSummary from '@/components/SiteSummary.vue';
  import SiteInfo from '@/components/SiteInfo.vue';
  import SimpleLoader from '@/components/SimpleLoader.vue';
  import {  Site } from '@/types';
  
  
  export default defineComponent({
    name: 'SiteDetailView',
    components: {
      Header,
      SiteSummary,
      SiteInfo,
      SimpleLoader,
    },
    setup() {
      const route = useRoute();
      const router = useRouter();
      const site = ref<Site | null>(null);
      const isLoading = ref(true);
  
      const fetchSite = async () => {
        try {
          if (route?.params?.id) {
            const response = await apiService.getSiteById({ id: route.params.id as string });
            site.value = response.data;
          }
        } catch (error) {
          console.error('Error fetching site:', error);
          site.value = null;
        } finally {
          isLoading.value = false;
        }
      };
  
      const goBack = () => {
        router.push('/');
      };
  
      onMounted(fetchSite);
  
      return {
        site,
        goBack,
        isLoading,
      };
    },
  });
  </script>