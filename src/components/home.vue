<template lang="html">
    <div class="box-home">
        <h2>Trade or View your Portfolio</h2>
        <h6>You may Save & Load your Data</h6>
        <h6>Click on 'End Day' to begin a new Day!</h6>
        <hr>
        <h4>Your Funds: ${{ founds.toLocaleString() }}</h4>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters({
            founds: 'getFounds'
        })
    }
}
</script>

<style lang="scss">
    .box-home{
        padding: 20px;
        width: 100%;
        border: 1px solid grey;
        border-radius: 3px;
    }
</style>
