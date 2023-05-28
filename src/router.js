import { createRouter, createWebHistory } from "vue-router";
import PortfPage from './pages/PortfPage.vue';
import AboutPage from './pages/AboutPage.vue';
import HomePage from './pages/HomePage.vue'

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
        }
    ]
});
export { router };