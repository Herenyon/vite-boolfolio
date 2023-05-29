import { createRouter, createWebHistory } from "vue-router";
import PortfPage from './pages/PortfPage.vue';
import AboutPage from './pages/AboutPage.vue';
import HomePage from './pages/HomePage.vue';
import DetailPage from './pages/DetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: HomePage
        },
        {

            path: '/portf',
            name: 'portf',
            component: PortfPage

        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/detail/:slug',
            name: 'detail',
            component: DetailPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        }

    ]
});
export { router };