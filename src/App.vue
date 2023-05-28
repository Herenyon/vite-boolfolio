<script>

import HeaderApp from './components/HeaderApp.vue';

import FooterApp from './components/FooterApp.vue';
export default {
  name: 'App',
  components: {
    HeaderApp,
    FooterApp,
  },

}
</script>

<template>
  <HeaderApp />
  <router-view></router-view>
  <!-- <MainApp :data="portf" /> -->
  <FooterApp />
</template>


<style lang="scss">
//versione 1 - inclusione via app.vue
// @use './assets/scss/main.scss' as *;
</style>
