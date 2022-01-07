export default [{
  name: 'demo',
  path: '/demo',
  component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo/DemoContainer.vue'),
  children: [
    {
      name: 'picWall',
      path: '/demo/picwall',
      component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo/content/PicWall.vue'),
    },
    {
      name: 'trailing',
      path: '/demo/trailing',
      component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo/content/Trailing.vue'),
    },
    {
      name: 'scratchCard',
      path: '/demo/scratchcard',
      component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo/content/ScratchCard.vue'),
    },
  ],
}];
