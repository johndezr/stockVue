<template>
	<nav class="navbar navbar-inverse">
		<div class="container">
			  <div class="navbar-header">
				  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					  <span class="sr-only">Toggle navigation</span>
					  <span class="icon-bar"></span>
					  <span class="icon-bar"></span>
					  <span class="icon-bar"></span>
				  </button>
				  <router-link class="navbar-brand" to="/">Stock Trader</router-link>
			  </div>
			  <div class="collapse navbar-collapse navbar-left" id="bs-example-navbar-collapse-1">
				  <ul class="nav navbar-nav p">
					 <router-link to="/portfolio" tag="li" active-class="active"><a>Portfolio</a></router-link>
					  <router-link to="/stocks" tag="li" active-class="active"><a>Stocks</a></router-link>
				  </ul>
			  </div>
			  <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
				  <ul class="nav navbar-nav p">
					<li><a @click="$store.commit('newDay')">End Day</a></li>
					<li class="dropdown">
						  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
						  <ul class="dropdown-menu">
							<li @click="saveData"><a>Save</a></li>
							<li @click="loadData"><a>Load</a></li>
						  </ul>
						</li>
					<li><a href="#"><strong>Founds: ${{ founds.toLocaleString() }}</strong></a></li>
				  </ul>
			  </div>
		  </div>
	  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import { eventBus } from '../main.js'
export default {
  computed: {
		...mapGetters({
			founds: 'getFounds'
		})
	},

	methods: {		
		loadData () {
			this.$store.dispatch('loadData', this)
		},

		saveData () { 
			this.$store.dispatch('saveData', this)
		}
	}
}
</script>

<style lang="css" scoped></style>