<template>
  <div class="nav">
    <header class="header">
      <router-link :to="{ name: 'index' }" class="header-logo"></router-link>
      <div class="header-icon">
        <a href="https://github.com/roco2015" target="_blank" title="roco2015@github.com">
          <svg class="svg-icon" aria-hidden="true">
            <use xlink:href="#icon-github" />
          </svg>
        </a>
        <a>
          <svg class="svg-icon icon-qq" aria-hidden="true">
            <use xlink:href="#icon-qq" />
          </svg>
        </a>
        <a>
          <svg class="svg-icon icon-email" aria-hidden="true">
            <use xlink:href="#icon-email" />
          </svg>
        </a>
      </div>
      <div class="header-motto">
        <span class="motto-1">半仙算我命里多水</span>
        <span class="motto-2">随处去浪</span>
      </div>
    </header>
    <ul class="menu">
      <li v-for="(item, index) of navList" :key="index" class="menu-item">
        <router-link :to="{ name: item.name }" class="link">{{ item.title }}</router-link>
      </li>
    </ul>
    <header :class="{ show: fixedHeaderVisible }" class="header-fixed">
      <router-link :to="{ name: 'index' }" class="logo"></router-link>
    </header>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, onMounted, onBeforeUnmount,
} from 'vue';
import navList from './data/nav.json';

export default defineComponent({
  name: 'TheNav',
  setup() {
    const fixedHeaderVisible = ref(false);

    const handleScroll = (event: Event) => {
      const targetEl = event?.target;
      if (!targetEl || !(targetEl instanceof Document)) {
        return;
      }
      const { scrollTop } = targetEl.documentElement;
      fixedHeaderVisible.value = scrollTop > 150;
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
  data() {
    return {
      navList,
    };
  },
});
</script>

<style lang="postcss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  overflow: hidden;
  fill: currentColor;
  vertical-align: -0.15em;
}

.nav {
  height: 200px;
  margin: 0 auto;
  padding: 0 15px;
  font-weight: 500;

  .header {
    display: flex;
    height: 124px;
    margin-bottom: 20px;
    padding-top: 60px;
    line-height: 64px;

    .header-logo {
      align-self: stretch;
      width: 100px;
      margin: 0 15px;
      background: url("@/assets/images/logo.png") no-repeat center;
      background-size: contain;
      filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
    }

    .header-icon {
      display: flex;
      flex: 1;
      margin-left: 20px;
      font-size: 22px;

      .svg-icon {
        margin-right: 20px;
        color: var(--dark);
      }

      .icon-qq {
        font-size: 0.96em;
      }

      .icon-email {
        font-size: 1.1em;
      }
    }

    .header-motto {
      font-family:
        muyaosoftbrush,
        arial,
        verdana,
        helvetica,
        'PingFang SC',
        'HanHei SC',
        STHeitiSC-Light,
        Microsoft Yahei,
        sans-serif;

      .motto-1 {
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-100%);
        font-size: 30px;
        line-height: 1;
      }

      .motto-2 {
        display: block;
        font-size: 20px;
        line-height: 1;
      }
    }
  }

  .menu {
    display: flex;
    width: 950px;
    height: 44px;
    line-height: 44px;

    .menu-item {
      padding: 0 5px;

      .link {
        display: block;
        padding: 0 10px;
        color: var(--dark);
      }
    }
  }

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
}

@media (max-width: 950px) {
  .nav {
    width: 100%;

    .menu {
      width: 100%;
    }
  }
}
</style>
