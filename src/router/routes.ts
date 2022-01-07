import note from './sub/note';
import demo from './sub/demo';
import mz from './sub/mz';

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
  ...note,
  ...demo,
  ...mz,
];

export default router;
