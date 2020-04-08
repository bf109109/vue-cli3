import Vue from 'vue'
//import App from './App.vue'
import App from './pcapp.vue'
import router from './router'
import store from './store'
import "./utils/directive.js"
import './stylesheets/main.scss'
import './utils/rem.js'
import "@/utils/components"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
