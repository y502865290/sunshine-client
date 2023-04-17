import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import axios from './axios/index.js'
import url from './axios/url.js'
import {analysis} from './axios/analysis.js'

const app = createApp(App).use(store).use(router).use(TDesign);

app.config.globalProperties.$axios = axios
app.config.globalProperties.$url = url
app.config.globalProperties.$analysisResult = analysis

app.mount('#app');