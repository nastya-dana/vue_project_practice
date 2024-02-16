<template>
  <main class="main">
    <div :class="{
      'container main__wrapper': true,
      'main__wrapper_column': column,
      'container__secandary': column
    }">
      <CardProduct :horizontally="column" :preview="require('@/assets/images/img1.png')" title="Устрицы по рокфеллеровски"
        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры " price="2 700" />

      <CardProduct :horizontally="column" :preview="require('@/assets/images/img2.png')"
        title="Свиные ребрышки на гриле с зеленью"
        description="Не следует, однако забывать, что реализация намеченных плановых " price="1 600" />

      <CardProduct :horizontally="column" :preview="require('@/assets/images/img3.png')"
        title="Креветки по-королевски в лимонном соке"
        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
        price="1 820" />

      <CardProduct :horizontally="column" :preview="require('@/assets/images/img1.png')" title="Устрицы по рокфеллеровски"
        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры " price="2 700" />

      <CardProduct :horizontally="column" :preview="require('@/assets/images/img1.png')" title="Устрицы по рокфеллеровски"
        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры " price="2 700" />
      <CardProduct :horizontally="column" :preview="require('@/assets/images/img2.png')"
        title="Свиные ребрышки на гриле с зеленью"
        description="Не следует, однако забывать, что реализация намеченных плановых " price="1 600" />

      <CardProduct :horizontally="column" :preview="require('@/assets/images/img3.png')"
        title="Креветки по-королевски в лимонном соке"
        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
        price="1 820" />

      <CardProduct :horizontally="column" :preview="require('@/assets/images/img1.png')" title="Устрицы по рокфеллеровски"
        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры " price="2 700" />
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
    }
  },
  setup () {
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
