import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        founds: 10000,
        stocks: [
            { name: 'BMW', price: 110, quantity: 0 },
            { name: 'Google', price: 200, quantity: 0 },
            { name: 'Apple', price: 250, quantity: 0 },
            { name: 'Twitter', price: 60, quantity: 0 }
        ],
        appStocks: []
    },

    mutations: {
        buyStock(state, info) {
            state.founds -= state.stocks[info.index].price * info.quantity
            state.stocks[info.index].quantity += info.quantity
            state.appStocks.push(state.stocks[info.index])
        },

        newDay(state, info) {
            state.stocks.map(s => s.price = Math.floor((Math.random() * 280) + 50))
            state.appStocks.map(s => s.price = Math.floor((Math.random() * 280) + 50))
        },

        sellStock(state, info) {
            // INFO: SELL LOAD STOCKS DONT WORK FOR THE ARRAY REFERENCE
            state.founds += info.stock.price * info.quantity
            state.stocks[info.stock.index].quantity <= info.quantity ?
                state.appStocks.splice(info.stock.index, 1) :
                state.stocks[info.stock.index].quantity -= info.quantity
        }
    }
})