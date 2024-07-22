<template>
    <div class="container mx-auto p-4">
      <Header :title="'List'" :showBackButton="true" @goBack="goBack" />
      <SimpleLoader v-if="isLoading" />
      <template v-else-if="client">
        <ClientSummary :client="client" />
        <div class="p-4">
          <ClientDetails :client="client" />
        </div>
      </template>
      <div v-else class="p-4">
        <p>No client data available.</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import apiService from '@/services/api';
  import { Client } from '@/types';
  import Header from '@/components/Header.vue';
  import ClientSummary from '@/components/ClientSummary.vue';
  import ClientDetails from '@/components/ClientDetails.vue';
  import SimpleLoader from '@/components/SimpleLoader.vue';
  
  
  export default defineComponent({
    name: 'ClientDetailView',
    components: {
      Header,
      ClientSummary,
      ClientDetails,
      SimpleLoader,
    },
    setup() {
      const route = useRoute();
      const router = useRouter();
      const client = ref<Client | null>(null);
      const isLoading = ref(true);
  
      const fetchClient = async () => {
        try {
          if (route?.params?.id) {
            const response = await apiService.getClientById({ id: route.params.id as string });
            client.value = response.data;
          }
        } catch (error) {
          console.error('Error fetching client:', error);
          client.value = null; 
        } finally {
          isLoading.value = false;
        }
      };
  
      const goBack = () => {
        router.push('/');
      };
  
      onMounted(fetchClient);
  
      return {
        client,
        goBack,
        isLoading
      };
    },
  });
  </script>