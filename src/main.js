import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// Import our custom CSS
import "./assets/styles.scss";

import "./scripts.js";

import jQuery from "jquery";
window.$ = jQuery;

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
