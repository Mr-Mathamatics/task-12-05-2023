import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList: [],
    productCount: 0
}

export const cartsSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addToCard: (state, action) => {
            const found = state.productList.some(item => item.id === action.payload.id);
            console.log(found)
            if (found) {
                state.productList = state.productList.map(item => {
                    if (item.id === action.payload.id) {
                        item.qty += 1
                    }
                    return item
                })
            } else {
                state.productList = [...state.productList, { ...action.payload, qty: 1 }];
            }
            state.productCount += 1
        },
        removeToCard: (state, action) => {
            state.productList = state.productList.map(item => {
                if (item.id === action.payload) {
                    item.qty -= 1
                }
                if (item.qty) return item
            })
            state.productList = state.productList.filter((item) => item)
            state.productCount -= 1
        }
    },
})

export const { addToCard, removeToCard } = cartsSlice.actions

export default cartsSlice.reducer