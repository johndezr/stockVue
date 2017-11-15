<template lang="html">
    <div>
        <template v-if="stocks.length > 0">
            <app-stock
                v-for="(stock, index) in stocks"
                :key="index"
                :stock="stock">
            </app-stock>
        </template>
        <div v-else>
            <h2 class="text-center">Buy some stocks!</h2>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../../main.js'
import stock from './stock.vue'
export default {
    components: {
        appStock: stock
    },

    mounted () {
        eventBus.$on('actionPorfolio', action => {
            action === 'save' ? this.saveStocks() : this.loadStocks() 
        })
    },

    beforeDestroy () {
        eventBus.$off('actionPorfolio')
    },

    computed: {
        stocks () {
            return this.$store.getters.getPortfolioStocks
        }
    }
}
</script>

<style lang="css">
</style>