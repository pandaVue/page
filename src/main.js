import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Page from './components/myvue/pagetest.vue'
Vue.use(Router);
var routes = [{
    path: '/',
    name: 'Index',
    component: Page,
}]
var router = new Router({
    routes
})
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})