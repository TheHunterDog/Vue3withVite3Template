export const routes = [
  { label:"Home", name: "Home", path: '/', component: () => import('./pages/Home.vue') ,"props":true},
  { label:"About us",name: "About", path: '/about', component: () => import("./pages/About.vue") },
]