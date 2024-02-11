<template>
    <div class="card">

        <img class="card__preview" :src="preview" alt="">
        <div class="card__info">
            <h2 class="card__title">{{ title }}</h2>
            <p class="card__description">{{ description }}</p>
        </div>
        <div class="card__footer">
            <p class="card__price">{{ price }}</p>
            <ButtonX />
        </div>
    </div>
</template>

<script>
// import { ref } from 'vue'
import ButtonX from '@/components/ui/ButtonX.vue'
export default {
    name: 'CardProduct',
    components: {
        ButtonX
    },
    props: {
        title: {
            type: String,
            default: "Name"
        },
        description: {
            type: String,
            default: "description"
        },
        preview: {
            type: String,
            default: ''
        },
        price: {
            type: String,
            default: ''
        }
    },
    setup() {
    }
}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #D58C51;

    &:hover {
        color: #D58C51;
    }
}

.card__footer {
    display: flex;
    justify-content: space-around;
}

.card__title {
    font-size: 17px;
}

.card__description {
    font-size: 14px;
}

.card__price {
    font-size: 17px;
}
</style>
