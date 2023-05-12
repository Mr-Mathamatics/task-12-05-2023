import { configureStore } from "@reduxjs/toolkit"
import cartsReducer from './slice'
export const store = configureStore({
    reducer: {
        carts: cartsReducer
    },
})
