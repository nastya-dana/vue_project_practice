<template>
    <HeaderMain isBasket smallContainer title="Корзина с выбранными товарами" />
    <Main column minusHeight="249px" />
    <hr class="basket-card_line">
    <footer>
        <div class="container__secandary basket-card_footer">
            <div class="basket-card_info">
                <h2 class="basket-card_descr">Заказ на сумму: </h2>
                <p class="basket-card_price">6 220 ₽</p>
            </div>
            <button class="basket-card_button">Оформить заказ</button>
        </div>
    </footer>
</template>

<script>
// import { ref } from 'vue'
import HeaderMain from '@/components/blocks/HeaderMain.vue'
import Main from '@/components/blocks/Main.vue'

export default {
  name: 'BasketPage',
  components: {
    HeaderMain,
    Main
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
footer {
    background-color: #161516;
    color: #fff;
    padding: 30px 0;
}

.basket-card_footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.basket-card_info {
    display: flex;
    align-items: center;
    flex-direction: row;
}

.basket-card_descr {
    font-size: 21px;
    font-family: Montserrat;
    font-weight: 400;
}

.basket-card_price {
    font-size: 18px;
    font-family: Montserrat;
    font-weight: 400;
    color: #D58C51;
    margin: 0 20px 0 20px;
}

.basket-card_line {
    margin: 0;
    background-color: #161516;
    border: 1px solid #D58C51;
}

.basket-card_button {
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 400;
    background-color: #D58C51;
    width: 200px;
    height: 42px;
}
</style>
