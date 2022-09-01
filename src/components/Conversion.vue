<script>
import CurrencyField from "./CurrencyField.vue";
import { getCurrency, formatCurrency } from "../functions/functions";

export default {
    props: ['currencies'],
    data() {
      return {
          amountFrom: 0,
          amountTo: 0,
          currencyFrom: "USD",
          currencyTo: "UAH",
          firstCurrency: 1,
          secondCurrency: 1,
      };
    },
    methods: {
      changeAmountFrom(event) {
        if (event > 0) {
          this.firstCurrency = getCurrency(this.currencies, this.currencyFrom);
          this.secondCurrency = getCurrency(this.currencies, this.currencyTo);
        }
        this.amountTo = formatCurrency(event * this.secondCurrency / this.firstCurrency);
        this.amountFrom = event;
      },

      changeAmountTo(event) {
        if (event > 0) {
          this.firstCurrency = getCurrency(this.currencies, this.currencyFrom);
          this.secondCurrency = getCurrency(this.currencies, this.currencyTo);
        }
    
        this.amountFrom = formatCurrency(event * this.firstCurrency / this.secondCurrency);
        this.amountTo = event;
      },

      changeCurrencyFrom(event) {
        this.currencyFrom = event;
        this.firstCurrency = getCurrency(this.currencies, this.currencyFrom);
        this.amountTo = formatCurrency(this.amountFrom * this.secondCurrency / this.firstCurrency);
      },

      changeCurrencyTo(event) {
        this.currencyTo = event;
        this.secondCurrency = getCurrency(this.currencies, this.currencyTo);
        this.amountTo = formatCurrency(this.amountFrom * this.secondCurrency / this.firstCurrency);
      }
    },
    components: { CurrencyField }
}
</script>

<template>
  <div class="conversion">
    <div class="conversion__from">
      <CurrencyField
      :amount="amountFrom"
      :currency="currencyFrom"
      :currencies="currencies"
      @changeAmount="changeAmountFrom"
      @changeCurrency="changeCurrencyFrom"
    />
    </div>
  
    <div class="conversion__to">
      <CurrencyField
        :amount="amountTo"
        :currency="currencyTo" 
        :currencies="currencies"
        @changeAmount="changeAmountTo" 
        @changeCurrency="changeCurrencyTo" 
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .conversion {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
</style>
