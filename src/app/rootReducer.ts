import { combineReducers } from '@reduxjs/toolkit'

import cartReducer from '../features/cart/cartSlice'
import filterSlice from '../features/filter/filterSlice'

const rootReducer = combineReducers({ cart: cartReducer, filter: filterSlice })

export default rootReducer
