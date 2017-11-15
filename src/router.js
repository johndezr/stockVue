import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [{
        path: '/',
        name: 'home',
        component (resolve) {
            require(['./components/home.vue'], resolve)
        }
    }, {
        path: '/stocks',
        name: 'stocks',
        component (resolve) {
            require(['./components/stocks/stocks.vue'], resolve)
        }
    }, {
        path: '/portfolio',
        name: 'portfolio',
        component (resolve) {
            require(['./components/portfolio/portfolio.vue'], resolve)
        }
    }]
})
