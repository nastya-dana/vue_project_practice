<template>
  <header class="header">
    <div :class="{
      'container header__wrapper': true,
      'container__secandary': smallContainer
    }">
      <div class="header__back" v-if="isBasket">
        <router-link to="/">
          <ButtonX title="←" />
        </router-link>
      </div>
      <h1 class="header__title"> {{ title }} </h1>

      <div class="header__info">
        <div class="header__right" v-if="!isBasket">3 товара<br>на сумму 3 500 ₽</div>
        <div class="header__basket">
          <router-link to="/Basket" v-if="!isBasket">
            <basketIcon />
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
//  import { ref } from 'vue'
import basketIcon from '@/components/icons/basketIcon.vue'
import ButtonX from '@/components/ui/ButtonX.vue'

export default {
  name: 'HeaderMain',
  components: {
    basketIcon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    isBasket: {
      type: Boolean,
      default: false
    },
    smallContainer: {
      type: Boolean,
      default: false
    }
  },
  setup() {
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #161516;
  color: #fff;
  padding: 48px 0 75px 0;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 0 20px;
  }

  &__title {
    font-size: 31px;
    font-family: Montserrat;
    font-weight: 700;
  }

  &__right {
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    font-size: 17px;
    font-family: Montserrat;
    font-weight: 500;

  }
}
</style>
