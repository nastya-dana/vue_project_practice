<template>
    <main class="container">
        <CardProduct />>
    </main>
</template>

<script>
// import { ref } from 'vue'
import CardProduct from '@/components/element/CardProduct.vue'
export default {
    name: 'ListProducts',
    components: {
        CardProduct
    },
    props: {
    },
    setup() {
    }
}
</script>

<style lang="scss" scoped></style>
