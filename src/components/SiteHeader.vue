<template>
    <div class="flex items-center justify-between bg-blue-500 p-4 text-white">
      <button @click="$emit('goBack')" class="focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
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
    name: 'SiteHeader',
    props: {
      title: {
        type: String,
        required: true
      }
    },
    emits: ['goBack']
  });
  </script>