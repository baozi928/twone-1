<<<<<<< HEAD
import { createApp } from 'vue'
import {App} from './App'

createApp(App).mount('#app')
=======
import { createApp } from "vue";
import { App } from "./App";
import { routes } from "./config/routes";
import { createRouter } from "vue-router";
import { history } from "./shared/history";
import '@svgstore';

const router = createRouter({
  history,
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
>>>>>>> 4ae5d52 (first commit)
