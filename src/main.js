import { createApp } from 'vue'
import { router } from '/src/router';
import * as bootstrap from 'bootstrap';
import './assets/scss/main.scss';

import App from './App.vue'

createApp(App).use(router).mount('#app')
