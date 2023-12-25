<script setup lang="ts">
import ProductItem from "../../components/products/ProductItem.vue";
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <base-select></base-select>
      </v-col>
      <v-col cols="10">
        <base-text-field></base-text-field>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row>
      <v-col
          v-for="n in 12"
          :key="n"
          cols="12"
          sm="3"
      >
        <product-item></product-item>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <base-pagination></base-pagination>
  </v-container>
</template>

<style scoped>

</style>