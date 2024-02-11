<template>
    <header class="header">

        <div class="header__left"> наша продукция </div>
        <!-- <div> -->
        <div class="header__right">3 товара<br>на сумму 3 500 ₽</div>
        <div class="header__basket">
            <basketIcon />
        </div>
        <!-- </div> -->
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
    display: flex;
    height: 120px;
    // padding: 13px 70px;
    justify-content: space-around;
    align-items: center;
    gap: 50px 70 px; //1485px;
    background-color: #161516;
    color: #fff;
    // margin-bottom: 53px;

    // margin-bottom: 235px;
    &__left {
        font-size: 31px;
        margin-left: 70px;
        margin-top: 54Px;
    }

    &__right {
        // display: flex;
        // justify-content: space-between;
        // align-items: center;
        font-size: 17px;
        margin-top: 51Px;
    }

    &__basket {
        margin-top: 48Px;
        // margin-left: 1320px;
    }
}
</style>
 