import Vue from 'vue'
import Vuex from 'vuex'
import portfolio from './modules/portfolio'
import stock from './modules/stock'
import actions from './actions.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
	actions,
    modules: { portfolio, stock }
})