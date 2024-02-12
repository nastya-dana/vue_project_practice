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

.card__preview {
    margin-bottom: 20px;
}

.card__footer {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    width: 100%;
    align-items: center;
}

.card__title {
    font-size: 17px;
    font-family: Montserrat;
    font-weight: 500;
    margin-bottom: 15px;
}

.card__description {
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 400;
    margin-bottom: 31px;
}

.card__price {
    font-size: 17px;
    font-family: Montserrat;
    font-weight: 500;
}
</style>
