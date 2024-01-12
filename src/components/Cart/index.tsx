import { useSelector } from 'react-redux'
import { selectProductsTotalPrice } from '../../app/cartSelectors'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import * as S from './styles'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { clearCart } from '../../features/cart/cartSlice'
import EmptyCart from '../emptyCart'
import { Link } from 'react-router-dom'

import CartItemMobile from './cartItemMobile'
import CartItemDesktop from './cartItemDesktop'

const Cart = () => {
  const { products } = useAppSelector((state) => state.cart)
  const productsTotalPrice = useSelector(selectProductsTotalPrice)
  const dispatch = useAppDispatch()

  function handleClearCart() {
    dispatch(clearCart())
    localStorage.removeItem('cartItems')
  }

  return (
    <S.CartContainer>
      <S.Header>
        <S.HeaderContent>
          <S.Logo to="/">SH🛒PPING</S.Logo>
          <S.ReturnShopping>
            <Link to="/">
              <AiOutlineArrowLeft size={18} color="#fff" />
              <span>Continue Shopping</span>
            </Link>
          </S.ReturnShopping>
        </S.HeaderContent>
      </S.Header>
      <S.CartTitle>Shopping Cart</S.CartTitle>
      {products.length > 0 ? (
        <>
          <S.ProductMobile>
            <S.ButtonContainer>
              <button className="clear-cart" onClick={handleClearCart}>
                Clear Cart
              </button>
            </S.ButtonContainer>
            {products.map((product) => (
              <CartItemMobile key={product.id} product={product} />
            ))}
            <S.MobileSummary>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Purchase Total</span>
                  <span className="amount">${productsTotalPrice}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <button>Check Out</button>
                <div className="continue-shopping">
                  <Link to="/">
                    <AiOutlineArrowLeft size={20} />
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </S.MobileSummary>
          </S.ProductMobile>
          <S.ProductContainer>
            <div>
              <div className="titles">
                <h3 className="product-title">Product</h3>
                <h3 className="price">Price</h3>
                <h3 className="quantity">Quantity</h3>
                <h3 className="total">Subtotal</h3>
              </div>
              {products.map((product) => (
                <CartItemDesktop key={product.id} product={product} />
              ))}
              <div className="cart-summary">
                <button className="clear-cart" onClick={handleClearCart}>
                  Clear Cart
                </button>
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>Purchase Total</span>
                    <span className="amount">${productsTotalPrice}</span>
                  </div>
                  <p>Taxes and shipping calculated at checkout</p>
                  <button>Check Out</button>
                  <div className="continue-shopping">
                    <Link to="/">
                      <AiOutlineArrowLeft size={20} />
                      <span>Continue Shopping</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </S.ProductContainer>
        </>
      ) : (
        <EmptyCart />
      )}
    </S.CartContainer>
  )
}

export default Cart
