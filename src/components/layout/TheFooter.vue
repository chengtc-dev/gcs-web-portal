<script setup lang="ts">
import { ref } from 'vue'

const icons = ref([
  'fa-brands fa-facebook',
  'fa-brands fa-twitter',
  'fa-brands fa-linkedin',
  'fa-brands fa-instagram',
]);
</script>

<template>
  <v-footer class="d-flex flex-column pa-0">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <v-spacer></v-spacer>

      <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="plain"
          size="small"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Gift Card</strong>
    </div>
  </v-footer>
</template>

<style scoped>

</style>