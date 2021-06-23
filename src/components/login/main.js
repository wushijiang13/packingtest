import Vue from 'vue'
import VueRouter from 'vue-router';
import App from '../../app/App.vue'
import {loginRoutes} from './router/router'

Vue.config.productionTip = false

console.log(loginRoutes);
console.log("当前环境:"+process.env.NODE_ENV);
console.log("当前运行项目:"+process.env.MODULE_NAME);

let router = new VueRouter({
    routes:loginRoutes,
})


Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

