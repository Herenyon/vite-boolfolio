<script>
import axios from 'axios';
import HeaderApp from './components/HeaderApp.vue';

import FooterApp from './components/FooterApp.vue';
export default {
  name: 'App',
  data() {
    return {
      apiBaseUrl: 'http://127.0.0.1:8000/api/',
      apiUrl: {
        portfs: 'portf'
      },
      portf: []
    }
  },
  components: {
    HeaderApp,

    FooterApp,
  },
  methods: {
    getPortf() {
      axios.get(this.apiBaseUrl + this.apiUrl.portfs).then((response) => {
        this.portf = response.data.results
      }
      ).catch((error) => {
        console.log(error);
      })
    }
  },
  created() {
    this.getPortf();
  }

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
