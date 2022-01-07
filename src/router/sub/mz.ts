export default [
  {
    name: 'mz',
    path: '/mz',
    component: () => import(/* webpackChunkName: 'mz' */ '@/views/mz/MengZhanIndex.vue'),
  },
  {
    name: 'mzyz',
    path: '/mz/yz',
    component: () => import(/* webpackChunkName: 'mz' */ '@/views/mz/yuanzheng/MZYuanZhengIndex.vue'),
  },
];
