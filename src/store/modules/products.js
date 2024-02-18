import products from '@/modules/products'
export default {

    state: {
        CountBasketProduct: 0,
        AllPriceInBasket: 0,
        ProductsList: products,
        BasketList: []
    },
    getters: {
        getProductsList: state => state.ProductsList,
        getBasketList: state => state.BasketList,
        getCountBasketProduct: state => state.CountBasketProduct,
        getAllPriceInBasket: state => state.AllPriceInBasket

    },
    mutations: {
        SetBasketList(state, val) {
            state.ProductsList.forEach(item => {
                if (item.id === val) {
                    state.BasketList.push(item)
                }
            });
            state.CountBasketProduct = state.BasketList.length
            state.AllPriceInBasket = state.BasketList.reduce((prev, item) => {
                return prev + item.price
            }, 0)
            //.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1')
        }

    },
    actions: {
    }
}