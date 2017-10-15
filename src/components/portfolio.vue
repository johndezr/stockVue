<template lang="html">
    <div>
        <template v-if="appStocks.length > 0">
            <app-stock
                v-for="(stock, index) in appStocks"
                :key="index"
                :info="{stock, index, action: 'sell'}">
            </app-stock>
        </template>
        <div v-else>
            <h2 class="text-center">Buy some stocks!</h2>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { eventBus } from '../main.js'
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

    data () {
        return {
            quantity: ''
        }
    },

    methods: {
        saveStocks () {
            if (this.appStocks.length > 0) {
                this.$http.post('https://stock-trader-3501e.firebaseio.com/stocks.json', {
                    payload: this.appStocks
                })
                .then(res => {
                    this.$toasted.show('Stock saved')
                })
                .catch(err => console.log(err))
            }else{
                this.$toasted.show('Nothing to save')
            }
        },

        loadStocks () {
            this.$http.get('https://stock-trader-3501e.firebaseio.com/stocks.json')
            .then(res => {
                if (res.data) {                    
                    for (const key of Object.keys(res.data)) {
                        this.appStocks = [...this.appStocks, ...res.data[key].payload]
                    }
                }else{
                    this.$toasted.show('Nothing to show')
                }
            })
            .catch(err => console.log(err))
        }
    },

    computed: {
        appStocks: {
            get () {
                return this.$store.state.appStocks
            },
            set (newValue) {
                newValue.forEach(w => this.$store.state.appStocks.push(w))
            }
        }
    }
}
</script>

<style lang="css">
</style>