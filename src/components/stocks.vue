<template lang="html">
    <div class="row">
        <app-stock
            v-for="(stock, index) in stocks"
            :key="index"
            :info="{stock, index, action: 'buy'}">
        </app-stock>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import stock from './stock.vue'
export default {
    components: {
        appStock: stock
    },

    computed: mapState([
        'stocks'
    ])
}
</script>

<style lang="scss"></style>
