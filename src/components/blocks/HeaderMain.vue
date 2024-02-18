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
        <div class="header__right" v-if="!isBasket">{{ count }} товара<br>на сумму {{ price }} ₽</div>
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
import { computed } from 'vue'
import { useStore } from 'vuex'

import basketIcon from '@/components/icons/basketIcon.vue'
import ButtonX from '@/components/ui/ButtonX.vue'

export default {
  name: 'HeaderMain',
  components: {
    basketIcon,
    ButtonX
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
    const store = useStore()

    const count = computed(() => {
      return store.getters.getCountBasketProduct
    })
    const price = computed(() => {
      return store.getters.getAllPriceInBasket
    })
    return {
      count,
      price
    }

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

  :deep(button) {

    border: 1px solid #D58C51;
    color: #D58C51;

    &:hover {
      color: inherit;

    }
  }
}
</style>
