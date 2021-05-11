<template>
  <note-content-title title="coding better" date="2021-05-04 01:23:45" author="圆企鹅·ruler"></note-content-title>
  <section class="content markdown-body" v-html="html">
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import axios from 'axios';

import NoteContentTitle from '@/views/note/components/NoteContentTitle.vue';

export default defineComponent({
  components: { NoteContentTitle },
  setup() {
    const route = useRoute();
    const mkName = String(route.query.name);
    const html:any = ref({});
    const md = new MarkdownIt();
    onMounted(async () => {
      axios.get(`/md/${mkName}.md`).then(({ data }) => {
        html.value = md.render(data || '');
      });
    });
    return { html };
  },
});
</script>

<style lang="postcss" scoped>
.content {
  width: 950px;
  margin: 0 auto;
}
</style>
<style lang="postcss">
@import '@/assets/css/github.postcss';
</style>
