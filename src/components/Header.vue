<template>
  <div class="flex items-center justify-between bg-blue-500 p-4 text-white">
    <button @click="handleButtonClick" class="focus:outline-none">
      <svg v-if="showBackButton" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
    <h1 class="text-xl font-bold">{{ title }}</h1>
    <div class="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
      D
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    },
    showBackButton: {
      type: Boolean,
      default: false
    }
  },
  emits: ['goBack', 'toggleMenu'],
  setup(props, { emit }) {
    const handleButtonClick = () => {
      if (props.showBackButton) {
        emit('goBack');
      } else {
        emit('toggleMenu');
      }
    };

    return {
      handleButtonClick
    };
  }
});
</script>