import products from '@/modules/products'
export default {

    state: {
        CountBasketProduct: 0,
        AllPriceInBasket: 0,
        ProductsList: products,
        BasketList: [
            {
                id: 1,
                img: require('@/assets/images/img1.png'),
                title: "Устрицы по рокфеллеровски",

                price: 2700
            },
            {
                id: 2,
                img: require('@/assets/images/img2.png'),
                title: "Свиные ребрышки на гриле с зеленью",
                price: 1600
            }
        ]
    },
    getters: {
        getProductsList: state => state.ProductsList,
        getBasketList: state => state.BasketList,
        getCountBasketProduct: state => state.CountBasketProduct,
        getAllPriceInBasket: state => state.AllPriceInBasket

    },
    mutations: {
    },
    actions: {
    }
}