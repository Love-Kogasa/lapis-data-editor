import { resetView } from 'mettle';
import { initRouter } from 'mettle-router';

import Home from '../views/home';
import Error404 from '../views/404';

const paths = [
  { path: '/', template: Home },
  { path: '/404', template: Error404 }
]

const router = initRouter(
  paths,
  resetView,
  '#router'
);

export default router;
