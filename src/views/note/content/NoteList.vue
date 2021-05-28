<template>
  <the-header></the-header>
  <main class="note-wrap">
    <section v-for="notes of notesList" :key="notes.title" class="sec-note">
      <h4 class="sub-title">{{notes.title}}</h4>
      <div class="inner">
        <note-card v-for="note of notes.notes" :key="note.title" :note="note" class="note-card"></note-card>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/common/TheHeader.vue';
import NoteCard from '../components/NoteCard.vue';
import notesList from '../data/note.json';

export default defineComponent({
  name: 'NoteIndex',
  components: {
    TheHeader,
    NoteCard,
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

    .note-card {
      margin: 15px 15px 0 0;
    }
  }
}

@media (max-width: 950px) {
  .note-wrap {
    width: 100%;
  }

  .sec-note {
    margin-top: 40px;

    &:first-of-type {
      margin-top: 0;
    }

    .sub-title {
      padding-left: 15px;
    }

    .inner {
      .note-card {
        margin: 15px 0 0 15px;
      }
    }
  }
}
</style>
