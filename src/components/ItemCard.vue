<template>
  <div class="flex items-center w-full">
    <div class="flex-shrink-0">
      <template v-if="currentView === 'Sites'">
        <img
          v-if="item.images && item.images.length > 0"
          :src="item.images[0]"
          :alt="item.title"
          @error="handleImageError"
          class="w-12 h-12 rounded-full object-cover"
        />
        <div v-else class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
          <span class="text-gray-500 text-xl">{{ item.title.charAt(0) }}</span>
        </div>
      </template>
      <template v-else>
        <img
          :src="item.logo"
          :alt="item.givenName"
          @error="handleImageError"
          class="w-12 h-12 rounded-full object-cover"
        />
      </template>
    </div>
    <div class="ml-4 flex-grow">
      <p class="font-bold">{{ currentView === 'Sites' ? item.title : item.givenName }}</p>
      <template v-if="currentView === 'Sites'">
        <p class="text-gray-600">{{ item.address?.city }}, {{ item.address?.state }}</p>
        <p class="text-sm text-gray-500">{{ item.tags.join(', ') }}</p>
      </template>
      <template v-else>
        <p class="text-gray-600">{{ item.tags.join(', ') }}</p>
      </template>
    </div>
    <div class="ml-auto">
      <button
        @click="$emit('viewDetails', item.id)"
        class="text-blue-500 focus:outline-none"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Client, Site } from '@/types';

type ItemType = Site | Client;

export default defineComponent({
  name: 'ItemCard',
  props: {
    item: {
      type: Object as PropType<ItemType>,
      required: true
    },
    currentView: {
      type: String as PropType<'Sites' | 'Clients'>,
      required: true
    }
  },
  emits: ['viewDetails'],
  setup() {
    const handleImageError = (event: Event) => {
      const target = event.target as HTMLImageElement;
      target.style.display = 'none';
      const fallback = target.nextElementSibling as HTMLElement;
      if (fallback) {
        fallback.style.display = 'flex';
      }
    };

    return {
      handleImageError
    };
  }
});
</script>