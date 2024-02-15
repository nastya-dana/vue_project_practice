<template>
    <div :class="{
        'card': true,
        'card_horizontally': horizontally
    }">

        <img class="card__preview" :src="preview" alt="">
        <div class="card__info">
            <h2 class="card__title">{{ title }}</h2>
            <p class="card__description" v-if="!horizontally">{{ description }}</p>
        </div>
        <div :class="{
            'card__footer': true,
            'card__footer_horizontally': !horizontally
        }">
            <p class="card__price">{{ price }}</p>
            <ButtonX title="+" />
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
        },
        horizontally: {
            type: Boolean,
            default: false
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

    &_horizontally {
        flex-direction: row;
        align-items: center;
        border: none;

        .card__footer {
            margin: 0 0 0 auto;
        }

        .card__title {
            margin-left: 100px;
            margin-bottom: 0;
        }

        .card__preview {
            margin-bottom: 0;
        }

        .card__price {
            margin: 0 20px 0 100px;
            color: #D58C51;
        }

        &:hover {
            color: inherit;
        }
    }
}

.card__preview {
    margin-bottom: 20px;
}

.card__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;

    &_horizontally {
        width: 100%;
    }

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
