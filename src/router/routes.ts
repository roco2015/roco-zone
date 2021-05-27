const router = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: 'home',
    path: '/home',
    component: () => import(/* webpackChunkName: 'home' */ '@/views/home/HomeIndex.vue'),
  },
  {
    name: 'note',
    path: '/note',
    redirect: '/note/list',
    component: () => import(/* webpackChunkName: 'note' */ '@/views/note/NoteIndex.vue'),
    children: [
      {
        name: 'noteList',
        path: '/note/list',
        component: () => import(/* webpackChunkName: 'note' */ '@/views/note/content/NoteList.vue'),
      },
      {
        name: 'noteContent',
        path: '/note/content',
        component: () => import(/* webpackChunkName: 'note' */ '@/views/note/content/NoteContent.vue'),
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
  },
];

export default router;
