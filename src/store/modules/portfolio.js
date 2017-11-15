const state = {
	founds: 10000,
	stocks: []
}

const mutations = {
	restFounds(state, {price, quantity}) {
		state.founds -= price * quantity
	},

	sumFounds(state, { price, quantity }) {
		state.founds += price * quantity
	},

	setFounds(state, founds) {
		state.founds = founds
	},

	pushStock (state, stock) {
		state.stocks.push(stock)
	}
}

const getters = {
	getFounds : state => state.founds,
	getPortfolioStocks: state => state.stocks
}

const actions = {
	setPortfolio({ commit, rootState }, stocks){
		stocks.forEach(x => {
            let stockItem = rootState.stock.stocks.find(t => t.id == x.id)
            let portfolioStocks = state.stocks.find(t => t.id == x.id)
            stockItem.quantity = x.quantity
            if (!portfolioStocks) {
            	commit('pushStock', stockItem)
            }
        })
	},

	buyStock({ commit, state }, {stock, quantity}){
		const item = state.stocks.find(s => s.id === stock.id)
		stock.quantity += quantity 
		if (!item) state.stocks.push(stock)
		commit('restFounds', {price: stock.price, quantity })
	},

	sellStock ({ commit, state }, {stock, quantity}){
		const item = state.stocks.find(s => s.id === stock.id)
		const index = state.stocks.indexOf(item)
		if (stock.quantity == quantity) state.stocks.splice(index, 1)
		stock.quantity -= quantity
		commit('sumFounds', {price: stock.price, quantity })
	}
}

export default {
	state,
	mutations,
	getters,
	actions
}