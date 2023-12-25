<script setup lang="ts">
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
</script>

<template>
  <v-app>
    <the-header></the-header>
    <v-container>
      <router-view></router-view>
    </v-container>
    <the-footer></the-footer>
  </v-app>
</template>
