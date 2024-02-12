<template>
  <header class="header">
    <div class="container header__wrapper">
      <h1 class="header__left"> наша продукция </h1>

      <div class="header__info">
        <div class="header__right">3 товара<br>на сумму 3 500 ₽</div>
        <div class="header__basket">
          <basketIcon />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
//  import { ref } from 'vue'
import basketIcon from '@/components/icons/basketIcon.vue'

export default {
  name: 'HeaderMain',
  components: {
    basketIcon
  },
  props: {
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

  &__left {
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

  &__basket {
    // margin-left: 1320px;
  }
}
</style>
