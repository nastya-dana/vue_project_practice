<template>
    <div class="wrapper">
        <HeaderMain isItem title="наша продукция" />
        <div class="container item">
            <div class="item__img">
                <img class="item__ipreview" :src="product.img" alt="">
            </div>
            <div class="item__descr">
                <h2 class="item__title">{{ product.title }}</h2>
                <p class="item__description">{{ product.description }}</p>
                <span class="item__price">{{ product.price.toLocaleString() }} ₽</span>
                <ButtonGoOut title="В корзину" buttonAdd @click="addInBasket" />
            </div>
        </div>
    </div>
</template>

<script>
// import { ref } from 'vue'

import { onBeforeMount, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import HeaderMain from '@/components/blocks/HeaderMain.vue'
import ButtonGoOut from '@/components/ui/ButtonGoOut.vue'

export default {
    name: 'ProductPage',
    components: {
        ButtonGoOut,
        HeaderMain
    },
    props: {
    },
    setup() {
        const route = useRoute()
        const store = useStore()

        const product = computed(() => {
            return store.getters.getProductItem
        })

        onBeforeMount(() => {
            store.commit('SetProductItem', route.params.id)
        })

        const addInBasket = () => {
            store.commit('SetBasketList', product.value.id)
        }
        return {
            product,
            addInBasket
        }
    }
}
</script>

<style lang="scss" scoped>
// .deep(.header) {
//     background-color: transparent;
// }

.wrapper {
    background-image: url(../assets/images/bgItem.png);
    background-size: cover;
    // background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    color: #fff;
}

:deep(.header) {
    background-color: transparent;
    // max-width: 1304px;
}


.item {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;

    &__ipreview {
        width: 501px;
        height: 503px;
    }


    &__descr {
        padding: 60px 10px 40px 150px;
    }

    &__title {
        font-size: 30px;
        font-family: Montserrat;
        font-weight: 500;
        margin-bottom: 46px;
        color: #D58C51;
    }

    &__description {
        font-size: 14px;
        font-family: Montserrat;
        font-weight: 400;
        margin-bottom: 30px;
    }

    &__price {
        font-size: 23px;
        font-family: Montserrat;
        font-weight: 500;
        margin-bottom: 30px;
    }
}
</style>
