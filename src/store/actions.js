export default {
	loadData ({ commit, dispatch }, that) {
	    that.$http.get('/stocks.json')
	    .then(res => {
	        commit('setStock', res.data.stocks)
	        commit('setFounds', res.data.founds)
	        if (res.data.stocksPortfolio) dispatch('setPortfolio', res.data.stocksPortfolio)
	    })
	    .catch(err => that.$toasted.show(err))
	},

	saveData ({ getters }, that) {
    	const data = {
    	    founds: getters.getFounds,
    	    stocksPortfolio: getters.getPortfolioStocks,
    	    stocks: getters.getStocks
    	}
    	that.$http.put('/stocks.json', data)
    	.then(res => that.$toasted.show('Stock saved'))
    	.catch(err => that.$toasted.show('Sorry, try again'))
	}
 }