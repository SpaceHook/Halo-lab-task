<script>
  export default {
    props: ['amount', 'currency', 'currencies'],
    emits: ['changeCurrency', 'changeAmount'],
    methods: {

    }
  }
  </script>
  
  <template>
    <div class="currency">
      <input
        class="input is-primary" 
        type="text" :value="amount" 
        @keyup="$emit('changeAmount', $event.target.value)"
      >
      <div class="select">
        <select 
          :value="currency" 
          @change="$emit('changeCurrency', $event.target.value)"
        >
          <option 
            class="opt" 
            :value=currency[0] 
            v-for="currency of currencies" 
            :key="currency[0]"
          >
            {{currency[0]}}
          </option>
        </select>
      </div>
    </div>
  </template>
  
  <style lang="scss">
    .currency {
      display: flex;
      font-family: Helvetica sans-serif;
      font-size: 20px;
    }
    .input {
      font-family: Helvetica, sans-serif;
      font-size: 20px;
      font-weight: 900;
    }
  </style>
  