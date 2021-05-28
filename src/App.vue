<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const { userAgent } = window.navigator;
    const isAndroid = userAgent.indexOf('Android') >= 0;
    // const isIPad = userAgent.indexOf('iPad') >= 0;
    const isIPhone = userAgent.indexOf('iPhone') >= 0;
    const isMobile = isAndroid || isIPhone;
    provide('isMobile', isMobile);
  },
});
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
