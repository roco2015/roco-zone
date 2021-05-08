<template>
  <main class="note-wrap">
    <the-nav></the-nav>
    <section v-for="notes of notesList" :key="notes.title" class="sec-note">
      <h4 class="sub-title">{{notes.title}}</h4>
      <div class="inner">
        <note-box v-for="note of notes.notes" :key="note.title" :note="note"></note-box>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNav from '@/components/common/nav/TheNav.vue';
import NoteBox from './components/NoteBox.vue';
import notesList from './data/note.json';

export default defineComponent({
  name: 'NoteIndex',
  components: {
    TheNav,
    NoteBox,
  },
  data() {
    return {
      notesList,
    };
  },
});
</script>

<style lang="postcss" scoped>
.note-wrap {
  width: 950px;
  margin: 0 auto;

  .title {
    text-align: left;
  }
}

.sec-note {
  margin-top: 60px;

  .sub-title {
    margin-top: 20px;
    border-bottom: 1px solid var(--gray-light);
    text-align: left;
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
