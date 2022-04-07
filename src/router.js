import { createRouter, createWebHistory} from 'vue-router';
import login from './pages/login.vue'
import signup from './pages/signup.vue'
import index from "./pages/index.vue"

const routes = [
    {path: '/', Component: index},
    {path: '/login', Component: login},
    {path: '/signup', Component: signup},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;