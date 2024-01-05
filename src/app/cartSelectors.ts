export const selectProductsCount = (state: any) => {
  return state.cart.products.reduce(
    (acc: number, curr: { quantity: number }) => acc + curr.quantity,
    0
  )
}

export const selectProductsTotalPrice = (state: any) => {
  return state.cart.products.reduce(
    (acc: number, curr: { newPrice: number; quantity: number }) =>
      acc + curr.newPrice * curr.quantity,
    0
  )
}
