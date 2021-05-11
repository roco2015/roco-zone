<template>
  <main>
    <router-view></router-view>
    <the-footer></the-footer>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheFooter from '@/components/common/TheFooter.vue';

export default defineComponent({
  name: 'NoteIndex',
  components: {
    TheFooter,
  },
});
</script>
