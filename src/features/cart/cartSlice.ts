import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export interface CartSliceState {
  id: string
  img: string
  title: string
  reviews: string
  prevPrice: number
  newPrice: number
  company?: string
  color?: string
  category?: string
  quantity: number
}

export interface ProductState {
  products: CartSliceState[]
}

const initialState: ProductState = {
  products: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      )

      if (productIsAlreadyInCart) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
        return
      }

      state.products = [...state.products, { ...action.payload, quantity: 1 }]
      toast.success(`${action.payload.title} added to cart`)
    },
    increaseProductQuantity: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
      const itemIndex = state.products.findIndex(
        (product) => product.id === action.payload
      )
      toast.info(`Increase ${state.products[itemIndex].title} cart quantity`)
    },
    decreaseProductQuantity: (state, action) => {
      const itemIndex = state.products.findIndex(
        (product) => product.id === action.payload
      )
      toast.info(`Decrease ${state.products[itemIndex].title} cart quantity`)

      return {
        ...state,
        products: state.products
          .map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0),
      }
    },
    removeProductFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
      toast.warning('Product removed from cart')
    },
    clearCart: (state) => {
      state.products = []
      toast.error('Your cart now is empty')
    },
  },
})

export const {
  addProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
