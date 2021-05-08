<template>
  <main class="note-wrap">
    <the-fixed-header :scroll-distance="50"></the-fixed-header>
    <router-view></router-view>
    <the-footer></the-footer>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheFixedHeader from '@/components/common/TheFixedHeader.vue';
import TheFooter from '@/components/common/TheFooter.vue';

export default defineComponent({
  name: 'NoteIndex',
  components: {
    TheFixedHeader,
    TheFooter,
  },
});
</script>

<style lang="postcss" scoped>
.note-wrap {
  width: 950px;
  margin: 0 auto;
}
</style>
