<template>
  <header :class="{ show: fixedHeaderVisible }" class="header-fixed">
    <router-link :to="{ name: 'index' }" class="logo"></router-link>
  </header>
</template>

<script lang="ts">
import {
  defineComponent, ref, onMounted, onBeforeUnmount,
} from 'vue';

export default defineComponent({
  name: 'TheFixedHeader',
  props: {
    scrollDistance: {
      type: Number,
      default: 150,
    },
  },
  setup(props) {
    const fixedHeaderVisible = ref(false);

    const handleScroll = (event: Event) => {
      const targetEl = event?.target;
      if (!targetEl || !(targetEl instanceof Document)) {
        return;
      }
      const { scrollTop } = targetEl.documentElement;
      fixedHeaderVisible.value = scrollTop > props.scrollDistance;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });
    return {
      fixedHeaderVisible,
    };
  },
});
</script>

<style lang="postcss" scoped>
.header-fixed {
  display: flex;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
  align-items: center;
  height: 50px;
  transform: translateY(-100%);
  transition: all 0.3s ease-out;
  background: rgba(255, 250, 240, 0.95);
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  line-height: 50px;

  &.show {
    transform: translateY(0);
  }
}

.logo {
  align-self: stretch;
  width: 100px;
  margin: 0 15px;
  background: url("@/assets/images/logo.png") no-repeat center;
  background-size: contain;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
}
</style>
