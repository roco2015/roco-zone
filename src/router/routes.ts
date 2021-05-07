const router = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    name: 'index',
    path: '/index',
    component: () => import(/* webpackChunkName: 'index' */ '@/views/home/HomeIndex.vue'),
  },
  {
    name: 'note',
    path: '/note',
    component: () => import(/* webpackChunkName: 'note' */ '@/views/note/NoteIndex.vue'),
  },
];

export default router;
