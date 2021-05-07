<template>
  <h3>笔记列表</h3>
  <section v-for="notes of notesList" :key="notes.title" class="sec-note">
    <h3 class="title">{{notes.title}}</h3>
    <div class="inner">
      <note-box v-for="note of notes" :key="note.title" :note="note"></note-box>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import notesList from './data/note.json';

export default defineComponent({
  name: 'NoteIndex',
  setup() {
    return {
      notesList,
    };
  },
});
</script>

<style lang="postcss" scoped>
.sec-note {
  margin-top: 60px;
  .title {
    margin-top: 20px;
  }
  .inner {
    display: flex;
    position: relative;
    flex-flow: row wrap;
    align-items: flex-start;
    margin: 0 -15px;
  }
}
</style>
