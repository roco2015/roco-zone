<template>
  <main class="main">
    <router-link :to="{name: 'mzyz'}">远征相关</router-link>
    <the-footer></the-footer>
  </main>
</template>

<script setup lang="ts">
import TheFooter from '@/components/common/TheFooter.vue';
</script>

<style lang="postcss" scoped>
.main {
  padding: 10px;
}
</style>
