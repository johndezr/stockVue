<template lang="html">
    <span>
    <div class="btn-group">
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Filter <span class="caret"></span>
      </button>
      <ul class="dropdown-menu">
        <li><a @click="cheap">Cheaper</a></li>
        <li><a @click="expensive">More expensive</a></li>
      </ul>
    </div><br><br>
    <div class="row">
        <transition-group name="stock">            
            <app-stock
                v-for="(stock, index) in stocks"
                :key="stock.name"
                :stock="stock">
            </app-stock>
        </transition-group>
    </div>
    </span>
</template>

<script>
import stock from './stock.vue'
export default {
    components: {
        appStock: stock
    },

    methods: {
        cheap() {
            this.$store.dispatch('priceFilter', 'cheap')
        },

        expensive(){
            this.$store.dispatch('priceFilter', 'expensive')
        }
    },

    computed: {
        stocks() {
            return this.$store.state.stock.stocks
        }
    }
}
</script>

<style lang="scss">
    .stock-move {
      transition: transform 0.8s;
    }
</style>
