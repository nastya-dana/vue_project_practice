import products from '@/modules/products'
import { v4 as uuidv4 } from 'uuid'

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
                    const itemBasket = {
                        id: item.id,
                        idx: uuidv4(),
                        img: item.img,
                        title: item.title,
                        price: item.price
                    }
                    state.BasketList.push(itemBasket)
                }
            });
            localStorage.basket = JSON.stringify(state.BasketList)
            state.CountBasketProduct = state.BasketList.length
            state.AllPriceInBasket = state.BasketList.reduce((prev, item) => {
                return prev + item.price
            }, 0)
            // .toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1')
        },
        SetStoreBasket(state, val) {
            state.BasketList = JSON.parse(localStorage.getItem('basket'))
        },
        SetBasketRemoveItem(state, val) {
            state.BasketList = state.BasketList.filter(item => {
                return item.idx !== val
            })
            localStorage.basket = JSON.stringify(state.BasketList)
            state.CountBasketProduct = state.BasketList.length
            state.AllPriceInBasket = state.BasketList.reduce((prev, item) => {
                return prev + item.price
            }, 0)
        }

    },
    actions: {
    }
}