import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import global_variable from "./common/global_variable"
import global_method from "./common/global_method"


Vue.config.productionTip = false

Vue.prototype.$baseUrl = global_variable.$baseUrl
Vue.prototype.METHOD = global_method


new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
