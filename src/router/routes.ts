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
    redirect: '/note/notelist',
    component: () => import(/* webpackChunkName: 'note' */ '@/views/note/NoteIndex.vue'),
    children: [
      {
        name: 'noteList',
        path: '/note/notelist',
        component: () => import(/* webpackChunkName: 'note' */ '@/views/note/content/NoteList.vue'),
      },
      {
        name: 'codingBetter',
        path: '/note/codingbetter',
        component: () => import(/* webpackChunkName: 'note' */ '@/views/note/content/CodingBetter.vue'),
      },
    ],
  },
  {
    name: 'demo',
    path: '/demo',
    component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo/DemoContainer.vue'),
    children: [
      {
        name: 'picWall',
        path: '/demo/picwall',
        component: () => import(/* webpackChunkName: 'demo' */ '@/views/demo/content/PicWall.vue'),
      },
    ],
  },
];

export default router;
