<template>
    <div v-if="client">
      <div class="mb-4">
        <img :src="client.logo" alt="Client Image" class="w-full h-64 object-cover mb-4" />
      </div>
      <div>
        <div class="mb-2">
          <p><strong>Created:</strong> {{ formatDate(client.createdAt) }}</p>
        </div>
        <div class="mb-2">
          <p><strong>Updated:</strong> {{ formatDate(client.updatedAt) }}</p>
        </div>
        <div class="mb-2">
          <p><strong>Tags:</strong> {{ client.tags.join(', ') }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No client details available.</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { Client } from '@/types';
  
  export default defineComponent({
    name: 'ClientDetails',
    props: {
      client: {
        type: Object as PropType<Client | null>,
        default: null
      }
    },
    setup() {
      const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
      };
  
      return {
        formatDate
      };
    }
  });
  </script>