<template>
    <div class="container mx-auto p-4">
        <Header title="List" />
      <div class="bg-gray-100 p-4">
        <SearchBar 
          :currentView="currentView"
          :viewOptions="viewOptions"
          :showDropdown="showDropdown"
          @toggleDropdown="toggleDropdown"
          @selectView="selectView"
          @search="handleSearch"
        />
        <SimpleLoader v-if="isLoading" />
        <ItemList 
          v-else
          :items="items"
          :currentView="currentView"
          @viewDetails="viewDetails"
        />
        <Pagination
          :page="page"
          @prev="prevPage"
          @next="nextPage"
          :isFirstPage="page === 1"
          :isLastPage="page === totalPages"
        />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, watch, computed } from 'vue';
  import { useClientStore } from '@/stores/clientStore';
  import { useSiteStore } from '@/stores/siteStore';
  import { useRouter } from 'vue-router';
  import Header from '@/components/Header.vue';
  import SearchBar from '@/components/SearchBar.vue';
  import ItemList from '@/components/ItemList.vue';
  import Pagination from '@/components/Pagination.vue';
  import SimpleLoader from '@/components/SimpleLoader.vue';
  import { debounce } from '@/utils';
import { Item } from '@/types';
  

  
  function isValidItem(item: any): item is Item {
    return typeof item === 'object' && item !== null && typeof item.id === 'string';
  }
  
  export default defineComponent({
    name: 'ListView',
    components: { Header, SearchBar, ItemList, Pagination, SimpleLoader },
    setup() {
      const clientStore = useClientStore();
      const siteStore = useSiteStore();
      const router = useRouter();
      const showDropdown = ref(false);
      const viewOptions = ref(['Clients', 'Sites']);
      const currentView = ref('Clients');
      const searchQuery = ref('');
      const isLoading = ref(false);
  
      const items = computed<Item[]>(() => {
        const sourceArray = currentView.value === 'Clients' ? clientStore.clients : siteStore.sites;
        
        if (!Array.isArray(sourceArray) || !sourceArray.every(isValidItem)) {
          console.error('Invalid data structure in store');
          return [];
        }
        
        return sourceArray;
      });
  
      const fetchItems = async () => {
        isLoading.value = true;
        if (currentView.value === 'Clients') {
          await clientStore.fetchClients({
            _page: clientStore.page,
            _limit: 10,
            q: searchQuery.value,
            filter: clientStore.filter
          });
        } else {
          await siteStore.fetchSites({
            _page: siteStore.page,
            _limit: 10,
            q: searchQuery.value
          });
        }
        isLoading.value = false;
      };
  
      const handleImageError = (event: Event) => {
        const target = event.target as HTMLImageElement;
        target.style.display = 'none';
        const fallback = target.nextElementSibling as HTMLElement;
        if (fallback) {
          fallback.style.display = 'flex';
        }
      };
  
      const handleSearch = (event: Event) => {
        const target = event.target as HTMLInputElement;
        searchQuery.value = target.value;
        debouncedSearch();
      };
  
      const debouncedSearch = debounce(() => {
        fetchItems();
      }, 1000);
  
      const viewDetails = (id: string) => {
        if (currentView.value === 'Clients') {
          router.push(`/clients/${id}`);
        } else {
          router.push(`/sites/${id}`);
        }
      };
  
      const nextPage = async () => {
        const store = currentView.value === 'Clients' ? clientStore : siteStore;
        if (store.page < store.totalPages) {
          store.setPage(store.page + 1);
          await fetchItems();
        }
      };
  
      const prevPage = async () => {
        const store = currentView.value === 'Clients' ? clientStore : siteStore;
        if (store.page > 1) {
          store.setPage(store.page - 1);
          await fetchItems();
        }
      };
  
      const toggleDropdown = () => {
        showDropdown.value = !showDropdown.value;
      };
  
      const selectView = (view: string) => {
        currentView.value = view;
        showDropdown.value = false;
        searchQuery.value = ''; 
      };
  
  
      onMounted(() => {
        fetchItems();
      });
  
      watch(currentView, (newView) => {
        searchQuery.value = ''; 
        const store = newView === 'Clients' ? clientStore : siteStore;
        store.setPage(1); 
        fetchItems();
      }, { immediate: true });
  
      return {
        items,
        searchQuery,
        handleSearch,
        page: computed(() => currentView.value === 'Clients' ? clientStore.page : siteStore.page),
        totalPages: computed(() => currentView.value === 'Clients' ? clientStore.totalPages : siteStore.totalPages),
        nextPage,
        prevPage,
        viewDetails,
        showDropdown,
        toggleDropdown,
        viewOptions,
        currentView,
        handleImageError,
        selectView,
        isLoading,
      };
    },
  });
  </script>