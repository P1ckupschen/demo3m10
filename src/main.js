import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
import { ElementTiptapPlugin } from 'element-tiptap';
import 'element-tiptap/lib/index.css';
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementTiptapPlugin, {
  /* 插件配置项 */
});
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
