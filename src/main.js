import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Toasted from 'vue-toasted'
import { router } from './router'
import { store } from './store/index'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

Vue.filter('capitalize', value => value.charAt(0).toUpperCase() + value.slice(1))
axios.defaults.baseURL = 'https://stock-trader-3501e.firebaseio.com';
Vue.prototype.$http = axios
Vue.use(Toasted, {
    theme: "bubble",
    position: "top-right",
    duration : 2000,
    className: 'toast'
})

export const eventBus = new Vue()