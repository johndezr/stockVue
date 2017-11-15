<template lang="html">
    <div class="col-md-4">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">{{ stock.name }} 
                    <small>(Price: {{ stock.price }})</small> 
                    <small v-if="$route.name == 'portfolio'">| Quantity: {{ stock.quantity }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <input 
                    v-model.number="quantity" 
                    class="form-control" 
                    type="number" 
                    placeholder="Quantity" 
                    @keyup.enter="buy(stock)">
                <button @click="buy(stock)" class="btn btn-success pull-right" type="button" name="button" :disabled="quantity <= 0">{{'buy' | capitalize}}</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: ['stock'],
    
    computed:{
        founds(){
            return this.$store.getters.getFounds
        }
    },

    data () {
        return {
            quantity: ''
        }
    },

    methods: {
        buy (stock) {
            if (this.founds < stock.price * this.quantity) {
                this.$toasted.show('You need more founds')
            }else{
                this.$store.dispatch('buyStock', {stock, quantity: this.quantity})
                this.quantity = ''
                this.$toasted.show('Stock inverted')
            }
        }
    }
}
</script>

<style lang="css">
</style>
