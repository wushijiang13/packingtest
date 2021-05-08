import VueRouter from 'vue-router'
import Vue from 'vue'
import {loginRoutes} from '../components/login/router/router'
import {routes} from './router'

Vue.use(VueRouter);

let routerAll =routes.concat(loginRoutes);
export default new VueRouter({
    routes:routerAll,
})