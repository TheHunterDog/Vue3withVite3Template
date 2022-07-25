import { ViteSSG } from 'vite-ssg'
import {routes} from './routes.js'
import App from './App.vue'
import naive from 'naive-ui';
 import { createHead } from '@vueuse/head';


export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    const head = createHead()
    app.use(naive);
    app.use(head)
  },
)