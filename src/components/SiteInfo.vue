<template>
    <div v-if="site">
      <div class="mb-4">
        <img :src="site.images?.[0]" alt="Site Image" class="w-full h-64 object-cover mb-4" />
      </div>
      <div>
        <div class="mb-2">
          <p><strong>Created:</strong> {{ formatDate(site.createdAt) }}</p>
        </div>
        <div class="mb-2">
          <p><strong>Updated:</strong> {{ formatDate(site.updatedAt) }}</p>
        </div>
        <div class="mb-2">
          <p><strong>Tags:</strong> {{ site.tags?.join(', ') }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No site details available.</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import {  Site } from '@/types';
 
  
  export default defineComponent({
    name: 'SiteInfo',
    props: {
      site: {
        type: Object as PropType<Site | null>,
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