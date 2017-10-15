<template lang="html">
    <div class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">{{info.stock.name}} 
                <small>(Price: {{info.stock.price}})</small> 
                <small v-if="$route.name == 'portfolio'">| Quantity: {{info.stock.quantity}})</small>
            </h3>
          </div>
          <div class="panel-body">
              <input 
                v-model.number="quantity" 
                class="form-control" 
                type="number" 
                placeholder="Quantity" 
                @keyup.enter="pivotActions(info)">
              <button @click="pivotActions(info)" class="btn btn-success pull-right" type="button" name="button" :disabled="quantity <= 0 || sending">{{info.action | capitalize}}</button>
          </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: ['info'],

    computed: mapState([
        'founds'
    ]),

    data () {
        return {
            quantity: '',
            sending: false
        }
    },

    methods: {
        pivotActions (info) {
            this[info.action](info.stock, info.index)
        },

        sell (stock, index) {
            stock.index = index
            if (this.quantity > stock.quantity) {
                alert('No tienes las suficientes acciones')
                return
            }
            this.$store.commit('sellStock', {stock, quantity: this.quantity})
            this.quantity = ''
        },

        buy (stock, index) {
            this.sending = true
            if (this.founds < stock.price * this.quantity) {
                alert('You need more money')
            }else{
                this.$store.commit('buyStock', {index, quantity: this.quantity})
                this.clear()
                this.$toasted.show('Stock inverted')
            }
        },

        clear () {
            this.quantity = ''
            this.sending = false
        }
    }
}
</script>

<style lang="css">
</style>
