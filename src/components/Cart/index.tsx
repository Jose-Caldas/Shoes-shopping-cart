import { useSelector } from 'react-redux'
import {
  selectProductsCount,
  selectProductsTotalPrice,
} from '../../app/cartSelectors'
import { useAppSelector } from '../../app/hooks'
import CartItem from '../cartItem'
import * as S from './styles'
import { AiOutlineShoppingCart, AiOutlineArrowLeft } from 'react-icons/ai'

const Cart = () => {
  const { products } = useAppSelector((state) => state.cart)
  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  const productsCount = useAppSelector(selectProductsCount)

  return (
    <S.CartContainer>
      <S.Header>
        <S.HeaderContent>
          <S.Logo to="/">SH🛒PPING</S.Logo>
          <S.CartView to="/cart">
            <AiOutlineShoppingCart size={20} />
            <p>({productsCount})</p>
          </S.CartView>
        </S.HeaderContent>
      </S.Header>
      <S.CartContent>
        <S.CartTitle>Shopping Cart</S.CartTitle>
        <S.ProductContainer>
          {products.length > 0 ? (
            products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          ) : (
            <>
              <p>Empty cart!</p>
              <S.ReturnShop to="/">
                <AiOutlineArrowLeft size={20} />
                <p>Return Shopping</p>
              </S.ReturnShop>
            </>
          )}
          {products.length > 0 && (
            <S.CartTotal>
              <div>
                <span>Total Purchase:</span> R$ {productsTotalPrice}
              </div>
              <S.ReturnShop to="/">
                <AiOutlineArrowLeft size={20} />
                <p>Continue Shopping</p>
              </S.ReturnShop>
            </S.CartTotal>
          )}
        </S.ProductContainer>
      </S.CartContent>
    </S.CartContainer>
  )
}

export default Cart
