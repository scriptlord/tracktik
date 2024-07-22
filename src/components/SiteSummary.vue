<template>
    <div class="bg-blue-400 p-4 text-white">
      <div v-if="site" class="flex items-center">
        <img :src="site.images?.[0]" alt="Site Image" class="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 class="text-lg font-bold">{{ site.title }}</h2>
        </div>
      </div>
      <div v-else class="flex items-center">
        <div class="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
        <div>
          <h2 class="text-lg font-bold">Loading...</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import {  Site } from '@/types';

  
  export default defineComponent({
    name: 'SiteSummary',
    props: {
      site: {
        type: Object as PropType<Site | null>,
        default: null
      }
    }
  });
  </script>