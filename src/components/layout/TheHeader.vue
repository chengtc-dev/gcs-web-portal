<script setup lang="ts">

</script>

<template>
  <v-container>
    <v-app-bar :elevation="10" scroll-behavior="hide" density="comfortable" rounded>
      <v-app-bar-nav-icon icon="fas fa-gift" to="/"></v-app-bar-nav-icon>
      <v-app-bar-title>Gift Card</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="fas fa-shopping-cart" to="/checkout"></v-btn>
        <v-btn icon="fas fa-user" to="/orders"></v-btn>
      </template>
    </v-app-bar>
  </v-container>
</template>

<style scoped>

</style>