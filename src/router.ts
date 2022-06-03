import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: ()=>import('@/components/layout/layout-main.vue'),
    children:[
      {
        path:'home',
        name:'home',
        component:()=>import('@/pages/Home.vue')
      },
      {
        path:'playlist/:id',
        name:'playlist',
        component:()=>import('@/pages/SongListDetail.vue')
      },
      {
        path:'artistinfo/:id',
        name:'artistinfo',
        component:()=>import('@/pages/ArtistDetail.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
