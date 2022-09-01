<script>
import { formatCurrency, getCurrency } from '../functions/functions';

  export default {
    props: ['currencies'],
    data() {
      return {
        uah: 0,
        eur: 0,
      };
    },
    updated() {
      this.uah = getCurrency(this.currencies, 'UAH');
      this.eur = getCurrency(this.currencies, 'EUR');
    },
    methods: {
      correctFormat(number) {
        return formatCurrency(number);
      }
    }
  }
</script>
  
<template>
  <header class="header">
    <div class="header__content">
      <div class="logo">
        <a href="https://www.halo-lab.com/" class="logo__link">
          <img
            class="logo__img"
            src="../img/Halo_Lab_logo-removebg-preview.png"
            alt="Halo lab logo"
          >
          <p class="logo__name">
            HALO LAB
          </p>
        </a>
      </div>

      <div class="header__currencies">
        <p class="header__currency">
          1$ - {{correctFormat(uah)}}
        </p>

        <p class="header__currency">
          1€ - {{correctFormat(uah / eur)}}
        </p>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
  .header {
    margin-bottom: 100px;
    
    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 25px 15% 0;
    }

    &__currencies {
      font-size: 40px;
    }

    &__currency {
      cursor: default;
      opacity: 0.7;
      transition: 300ms;

      &::after {
        content: '';
        display: block;
        width: 0;
        height: 3px;
        background-color: #00009b;
        transition: 300ms;


      }
      &:hover {
        opacity: 1;
      }

      &:hover::after{
        width: 100%;
      }
    }
  }

  .logo {

    &__link {
      display: flex;
      align-items: center;
      gap: 30px;
      width: max-content;
      text-decoration: none;
    }

    &__img {
      height: 100px;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;

      &:hover {
        animation-name: rotateLogo;
      }

      @keyframes rotateLogo {
        0% {
          transform: rotate(0deg);
        }
  
        100% {
          transform: rotate(360deg);
        }
      } 
    }

    &__name {
      color: #fff;
      letter-spacing: 3px;
      font-size: 30px;
    }
  }
  
</style>
  