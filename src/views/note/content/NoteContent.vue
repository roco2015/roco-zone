<template>
  <note-content-title title="coding better" date="2021-05-04 01:23:45" author="圆企鹅·ruler"></note-content-title>
  <section class="content github-markdown-body" v-html="html">
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import { getNoteContent } from '@/api/noteAPI';
import NoteContentTitle from '@/views/note/components/NoteContentTitle.vue';

const route = useRoute();
const mkName = String(route.query.name);
const html = ref('');
const md = new MarkdownIt();
onMounted(async () => {
  const data = await getNoteContent(mkName);
  html.value = md.render(data || '');
});
</script>

<style lang="postcss" scoped>
.content {
  width: 950px;
  margin: 0 auto;
}
</style>
<style lang="postcss" src="@/assets/css/github.postcss"></style>
