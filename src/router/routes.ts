const router = [
  {
    name: 'home',
    path: '/home',
    component: () => import(/* webpackChunkName: 'home' */ '@/views/home/HomeIndex.vue'),
  },
  {
    name: 'note',
    path: '/note',
    component: () => import(/* webpackChunkName: 'note' */ '@/views/note/NoteIndex.vue'),
  },
];

export default router;
