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
      <ButtonX v-if="isItem" title="←" @click="router.go(-1)" />
      <h1 class="header__title"> {{ title }} </h1>

      <div class="header__info">

        <div class="header__basket" v-if="!isBasket">
          <p class="header__link">{{ count }} товара<br>на сумму {{ price.toLocaleString() }} ₽</p>

          <router-link to="/Basket">
            <basketIcon />
          </router-link>

        </div>

        <ButtonGoOut title="Выйти" @click.stop="clickGoOut" />
      </div>
    </div>
  </header>
</template>

<script>
//  import { ref } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import basketIcon from '@/components/icons/basketIcon.vue'
import ButtonX from '@/components/ui/ButtonX.vue'
import ButtonGoOut from '@/components/ui/ButtonGoOut.vue'

export default {
  name: 'HeaderMain',
  components: {
    basketIcon,
    ButtonX,
    ButtonGoOut
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
    },
    isItem: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()

    const router = useRouter()

    const count = computed(() => {
      return store.getters.getCountBasketProduct
    })
    const price = computed(() => {
      return store.getters.getAllPriceInBasket
    })

    const clickGoOut = () => {
      localStorage.setItem('isAuth', JSON.stringify(false))
      router.push('/auth')
    }
    return {
      count,
      price,
      router,
      clickGoOut
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

  &__basket {
    display: flex;
    align-items: center;
    gap: 0 20px;
  }

  &__title {
    font-size: 31px;
    font-family: Montserrat;
    font-weight: 700;
  }

  &__link {
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    font-size: 17px;
    font-family: Montserrat;
    font-weight: 500;
  }

  :deep(.button) {

    border: 1px solid #D58C51;
    color: #D58C51;

    &:hover {
      color: inherit;

    }
  }

}
</style>
