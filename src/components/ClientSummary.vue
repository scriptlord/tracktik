<template>
    <div class="bg-blue-400 p-4 text-white">
      <div v-if="client" class="flex items-center">
        <img :src="client.logo" alt="Client Image" class="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 class="text-lg font-bold">{{ client.givenName }}</h2>
        </div>
      </div>
      <div v-else class="flex items-center">
        <div class="w-16 h-16 rounded-full mr-4 bg-gray-300"></div>
        <div>
          <h2 class="text-lg font-bold">Loading...</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { Client } from '@/types';
  
  export default defineComponent({
    name: 'ClientSummary',
    props: {
      client: {
        type: Object as PropType<Client | null>,
        default: null
      }
    }
  });
  </script>