<template>
  <div id="app" class="container">
    <app-header></app-header>
      <transition name="router" mode="out-in">
          <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import appHeader from './components/header.vue'
export default {
    name: 'app',

    components: {
        appHeader
    }
}
</script>

<style lang="scss" scoped>
    .navbar{
        margin-top: 40px;
    }
    .router-enter-active, .router-leave-active {
      transition: opacity .3s ease;
    }
    .router-enter, .router-leave-to {
      opacity: 0;
    }
    li{
        cursor: pointer;
    }
    .form-control{
        width: 200px;
        display: inline-block;
    }
</style>
