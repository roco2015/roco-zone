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
    children: [
      {
        name: 'noteList',
        path: '/note/content/notelist',
        component: () => import(/* webpackChunkName: 'note' */ '@/views/note/content/NoteList.vue'),
      },
      {
        name: 'codingBetter',
        path: '/note/codingbetter',
        component: () => import(/* webpackChunkName: 'note' */ '@/views/note/content/CodingBetter.vue'),
      },
    ],
  },
];

export default router;
