<template>
  <div id="app">
    <!-- Navbar or header can be added here if needed -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>
