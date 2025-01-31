import HomeView from '@views/HomeView.vue'
import ProjectsView from '@views/ProjectsView.vue'
import type { RouteRecordRaw } from 'vue-router'

export const routes: Readonly<RouteRecordRaw[]> = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/projects', name: 'Projects', component: ProjectsView },
]
