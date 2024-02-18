<template>
  <main class="main">
    <div :class="{
      'container main__wrapper': true,
      'main__wrapper_column': column,
      'container__secandary': column
    }">
      <CardProduct :horizontally="column" v-for="(item, i) in  listArray " :key="i" :preview="item.img"
        :title="item.title" :description="item.description" :price="item.price"
        @clickCard="$emit('clickCard', item.id)" />

    </div>
  </main>
</template>

<script>
// import { ref } from 'vue'

import CardProduct from '@/components/elements/CardProduct.vue'

export default {
  name: 'Main',
  components: {
    CardProduct
  },
  props: {
    minusHeight: {
      type: String,
      default: '176px'
    },
    column: {
      type: Boolean,
      default: false
    },
    listArray: {
      type: Array,
      default: () => { }
    }
  },
  setup() {

  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: calc(100vh - v-bind(minusHeight));
  background-color: #161516;
  color: #fff;
  overflow: auto;

  .card {
    padding: 45px 20px 35px 20px;
    //width: 20%;
  }

  &__wrapper {
    display: flex;
    gap: 35px 10px;
    flex-wrap: wrap;
    justify-content: space-between;

    &_column {
      // flex-direction: column;
      display: block;
    }
  }

}
</style>
