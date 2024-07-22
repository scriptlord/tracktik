<template>
    <div class="flex justify-between items-center mb-4">
      <div class="relative">
        <button
          class="flex items-center bg-white border border-gray-300 p-2 rounded shadow-sm"
          @click="$emit('toggleDropdown')"
        >
          {{ currentView }}
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div
          v-if="showDropdown"
          class="absolute mt-2 w-full rounded-md shadow-lg bg-white z-10"
        >
          <ul>
            <li
              v-for="option in viewOptions"
              :key="option"
              @click="$emit('selectView', option)"
              class="cursor-pointer hover:bg-gray-100 p-2"
            >
              {{ option }}
            </li>
          </ul>
        </div>
      </div>
      <div class="relative">
        <input
          @input="$emit('search', $event)"
          type="text"
          placeholder="Search"
          class="p-2 border border-gray-300 rounded"
        />
        <svg class="w-5 h-5 absolute right-2 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    name: 'SearchBar',
    props: {
      currentView: {
        type: String,
        required: true
      },
      viewOptions: {
        type: Array as PropType<string[]>,
        required: true
      },
      showDropdown: {
        type: Boolean,
        required: true
      },
    },
    emits: ['toggleDropdown', 'selectView', 'search'],
  });
  </script>