<template>
  <div class="title-box">
    <h3 class="title">{{ title }}</h3>
    <div class="sub-title">
      <div class="time">{{ date }}</div>
      <div class="author">by: {{ author }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoteTitle',
  props: {
    title: String,
    date: String,
    author: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="postcss" scoped>
.title-box {
  position: sticky;
  z-index: 11;
  top: 0;
  margin-bottom: 20px;
  background: rgba(255, 250, 240, 0.95);
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);

  .title {
    text-align: left;
  }
}

.sub-title {
  display: flex;
  justify-content: space-between;
}

.time {
  color: @gray;
}
</style>
