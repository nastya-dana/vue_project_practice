<template>
  <HeaderMain title="наша продукция" />
  <Main :listArray="products" @clickCard="clickCard" />
</template>

<script>
// import { ref } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

import HeaderMain from '@/components/blocks/HeaderMain.vue'
import Main from '@/components/blocks/Main.vue'

export default {
  name: 'MainPage',
  components: {
    HeaderMain,
    Main
  },
  props: {
  },
  setup() {
    const store = useStore()

    const clickCard = (item) => {
      // console.log('Добавили в корзину:' + item.id);
      store.commit('SetBasketList', item.id)
    }

    const products = computed(() => {
      return store.getters.getProductsList
    })

    return {
      products,
      clickCard
    }
    re
  }
}
</script>

<style lang="scss" scoped>
:deep(.card) {
  width: 20%;
}
</style>
