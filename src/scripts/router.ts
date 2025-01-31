import { createMemoryHistory, createRouter } from 'vue-router'
import { routes } from '@data/routes'

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
