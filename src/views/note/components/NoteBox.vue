<template>
  <div class="box">
    <a :href="note.url" :target="target" class="link">
      <h5 class="title">{{ note.title }}</h5>
      <div class="sub-title">{{ note.subTitle }}</div>
    </a>
    <div class="footer">
      <router-link v-if="note.demo" :to="{ name: 'demo', params: { name: note.demo } }" class="item">demo</router-link>
      <a v-if="note.code" :href="note.code" target="_blank" class="item">code</a>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, computed, toRefs, PropType,
} from 'vue';

interface Note {
  title: string;
  subTitle?: string;
  routeName?: string;
  url?: string;
  demo?: string;
  code?: string;
}

export default defineComponent({
  name: 'NoteBox',
  props: {
    note: {
      type: Object as PropType<Note>,
      required: true,
    },
  },
  setup(props) {
    const { note } = toRefs(props);
    const target = computed(() => {
      if (note.value?.url === 'javascipt:;') {
        return '_self';
      }
      return '_blank';
    });
    return {
      target,
    };
  },
});
</script>

<style lang="postcss" scoped>
.box {
  display: flex;
  position: relative;
  flex-flow: column;
  margin: 15px;
  overflow: hidden;
  transition: transform 0.2s linear;
  border-radius: 10px;
  background: white;
  box-shadow: 0 9px 25px -22px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.2s linear;
    opacity: 0;
    background: rgba(0, 0, 0, 0.1);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px);

    &::before {
      opacity: 1;
    }
  }

  .link {
    padding: 20px 30px;
    color: #414a60;
  }

  .title {
    font-size: 14px;
  }

  .sub-title {
    opacity: 0.9;
    font-size: 12px;
  }

  .footer {
    margin-top: -20px;
    background: rgba(0, 0, 0, 0.1);
    font-size: 12px;
    line-height: 20px;

    .item {
      display: block;
      position: relative;
      height: 20px;
      padding: 0 30px;
      color: #414a60;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 16px;
        width: 6px;
        height: 6px;
        transform: translateY(-50%);
        border-radius: 50%;
        background: #f6f6f8;
      }
    }
  }
}
</style>
