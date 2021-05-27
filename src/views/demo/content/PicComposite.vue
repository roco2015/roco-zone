<template>
  <canvas id="canvas" :width="243" :height="233"></canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import imgUrl from '@/assets/images/common/gaoxiao1.jpeg';

export default defineComponent({
  name: 'PicComposite',
  setup() {
    onMounted(() => {
      const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;
      context.globalCompositeOperation = 'source-over';
      context.fillStyle = '#bbb';
      context.fillRect(0, 0, 243, 233);
      canvas.style.background = `url(${imgUrl})`;
      context.lineWidth = 50;
      context.lineCap = 'round';
      context.globalCompositeOperation = 'destination-out';
      let mouseupFlag = true;
      canvas.addEventListener('mousedown', (e) => {
        mouseupFlag = false;
        context.moveTo(e.offsetX, e.offsetY);
      });
      canvas.addEventListener('mousemove', (e) => {
        if (mouseupFlag) {
          return;
        }
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
      });
      canvas.addEventListener('mouseup', () => {
        mouseupFlag = true;
      });
      const canvasLeft = canvas.getBoundingClientRect().left;
      const canvasTop = canvas.getBoundingClientRect().top;
      canvas.addEventListener('touchstart', (e) => {
        context.moveTo(e.targetTouches[0].clientX - canvasLeft, e.targetTouches[0].clientY - canvasTop);
      });
      canvas.addEventListener('touchmove', (e) => {
        context.lineTo(e.targetTouches[0].clientX - canvasLeft, e.targetTouches[0].clientY - canvasTop);
        context.stroke();
      });
    });
  },
});
</script>

<style lang="postcss" scoped>
#canvas {
  display: block;
  margin: 20px auto 0;
}
</style>
