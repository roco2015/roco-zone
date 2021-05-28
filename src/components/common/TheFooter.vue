<template>
  <footer class="footer">
    <div class="copyright">
      <router-link :to="{ name: 'home' }">Copyright &copy; 圆企鹅</router-link>
      <a target="_blank" href="https://beian.miit.gov.cn/">辽ICP备2020012261号-1</a>
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=21011402000290">
        <img src="/img/icons/beian.png" class="icon" />
        <p>辽公网安备 21011402000290号</p>
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>

<style lang="postcss" scoped>
.footer {
  position: relative;
  min-height: 50px;
  margin: 30px auto 0;
  overflow: hidden;
  color: white;
  font-size: 14px;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.5));
}

.copyright {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  a {
    margin-right: 30px;
    color: white;
    white-space: nowrap;
  }

  .icon {
    width: 14px;
    height: 14px;
    margin-top: 6px;
    float: left;
  }
}
</style>
