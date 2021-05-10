<template>
  <the-header></the-header>
  <the-fixed-header></the-fixed-header>
  <the-footer></the-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/common/TheHeader.vue';
import TheFixedHeader from '@/components/common/TheFixedHeader.vue';
import TheFooter from '@/components/common/TheFooter.vue';

export default defineComponent({
  name: 'NoteIndex',
  components: {
    TheHeader,
    TheFixedHeader,
    TheFooter,
  },
});
</script>

<style lang="postcss" scoped>
</style>
