<script>
import Conversion from './components/Conversion.vue'
import Header from './components/Header.vue'

export default {
  components: {
    Conversion,
    Header
  },
  data() {
    return {
      currencies: [],
    }
  },
  mounted() {
    fetch('https://openexchangerates.org/api/latest.json?app_id=ac592b2489b641c8a2c05fa1403616bf')
      .then(res => res.json())
      .then(data => this.currencies = Object.entries(data.rates));
  },
}
</script>

<template>
  <Header :currencies=currencies />
  <Conversion :currencies=currencies />
</template>

<style>
  body {
    background-color: #02021e;
    height: 100vh;
    margin: 0;
  }
</style>
