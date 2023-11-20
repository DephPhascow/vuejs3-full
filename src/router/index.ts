import { useSession } from '@/stores/session'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { auth: false, meta: {title: "Главная страница", description: "Главная страница сайта"} }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'), 
      meta: { meta: {title: 'Страница не найдена'} }
    },      
  ],
  scrollBehavior() {
    return { top: 0 }
  }    
})

router.beforeEach(async (to, from, next) => {
  const uSession = useSession()
  const requireAuth = to.matched.some(record => record.meta.auth)
  if (requireAuth && !(await uSession.isActive())) {
    localStorage.clear()
    next('/')
  } else {
    next()
  }  
})

export default router
