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
                    @keyup.enter="sell(stock)">
                <button @click="sell(stock)" class="btn btn-success pull-right" type="button" name="button" :disabled="quantity <= 0">{{'sell' | capitalize}}</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: ['stock'],

    data () {
        return {
            quantity: ''
        }
    },

    methods: {
        sell (stock) {
            if (this.quantity > stock.quantity) {
                this.$toasted.show('You dont have enough actions')
                return
            }
            this.$store.dispatch('sellStock', {stock, quantity: this.quantity})
            this.quantity = ''
        }
    }
}
</script>

<style lang="css">
</style>
