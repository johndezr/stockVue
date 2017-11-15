const state = {
	stocks: [
		{ id: 0, name: 'BMW', price: 110, quantity: 0 },
		{ id: 1, name: 'Google', price: 260, quantity: 0 },
		{ id: 2, name: 'Apple', price: 200, quantity: 0 },
		{ id: 3, name: 'Twitter', price: 60, quantity: 0 },
		{ id: 4, name: 'Medium', price: 120, quantity: 0 },
		{ id: 5, name: 'Beats', price: 90, quantity: 0 }
	]
}

const mutations = {
	newDay(state) {
		state.stocks.map(s => s.price = Math.floor((Math.random() * 280) + 50))
	},

	setStock(state, stocks){
		state.stocks = stocks
	}
}

const getters = {
	getStocks(state){
		return state.stocks
	}
}

const actions = {
	priceFilter ({ commit, state }, info) {
		info === 'cheap' 
			? state.stocks.sort((a, b) => a.price - b.price)
			: state.stocks.sort((a, b) => b.price - a.price)
	}
}

export default {
	state,
	mutations,
	getters,
	actions
}