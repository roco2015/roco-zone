<template>
  <main class="main">
    <div class="github-markdown-body" v-html="html"></div>
    <the-footer></the-footer>
  </main>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import MarkdownIt from 'markdown-it';
import TheFooter from '@/components/common/TheFooter.vue';
import { getNoteContent } from '@/api/noteAPI';

const html = ref('');
const md = new MarkdownIt();
onMounted(async () => {
  const data = await getNoteContent('mengzhanyuanzheng');
  html.value = md.render(data || '');
});
</script>

<style lang="postcss" scoped>
.main {
  padding: 10px;
}
</style>
