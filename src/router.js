import { createRouter, createWebHistory } from "vue-router";
import PortfPage from './pages/PortfPage.vue';
import AboutPage from './pages/AboutPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'portf',
            component: PortfPage

        },
        {
            path: '/',
            name: 'about',
            component: AboutPage
        }
    ]
});
export { router };