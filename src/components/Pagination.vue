<template>
  <div class="my-4 flex justify-between">
    <button
      v-if="!isFirstPage"
      @click="$emit('prev')"
      class="px-4 py-2 border border-gray-300 rounded"
    >
      Previous
    </button>
    <div v-else class="w-[88px]"></div> 
    
    <button
      v-if="!isLastPage"
      @click="$emit('next')"
      class="px-4 py-2 border border-gray-300 rounded"
    >
      Next
    </button>
    <div v-else class="w-[88px]"></div> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Pagination',
  props: {
    page: {
      type: Number,
      required: true,
    },
    isFirstPage: {
      type: Boolean,
      required: true,
    },
    isLastPage: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['prev', 'next'],
});
</script>