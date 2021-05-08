import Vue from 'vue'
import App from './App.vue'
import router from './router/router.config'

Vue.config.productionTip = false

console.log(router);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
