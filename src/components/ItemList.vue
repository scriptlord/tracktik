<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.id"
      class="flex items-center bg-white p-4 mb-2 rounded shadow-sm"
    >
      <ItemCard 
        :item="item" 
        :currentView="currentView" 
        @viewDetails="$emit('viewDetails', item.id)"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ItemCard from './ItemCard.vue';
import { Client, Site } from '@/types';

type ItemType = Site | Client;

export default defineComponent({
  name: 'ItemList',
  components: { ItemCard },
  props: {
    items: {
      type: Array as PropType<ItemType[]>,
      required: true
    },
    currentView: {
      type: String as PropType<'Sites' | 'Clients'>,
      required: true
    },
  },
  emits: ['viewDetails'],
});
</script>