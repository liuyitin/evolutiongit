// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import store from './store';
import "@/css/base.css";
// import "@/assets/js/jquery.js";
import 'element-ui/lib/theme-chalk/index.css';
import 'vx-easyui/dist/themes/default/easyui.css';
import 'vx-easyui/dist/themes/icon.css';
import 'vx-easyui/dist/themes/vue.css';
import '@/assets/font-awesome/font-awesome.min.css';
import EasyUI from 'vx-easyui';
// import $ from '@/utils/jqueryVender.js';
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(EasyUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
