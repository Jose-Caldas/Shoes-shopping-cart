import * as S from './styles'
import { AiOutlineArrowLeft, AiOutlineShoppingCart } from 'react-icons/ai'

function EmptyCartCheckout() {
  return (
    <S.EmptyContainer>
      <S.ShoppingCartIcon>
        <AiOutlineShoppingCart color="#eee" />
      </S.ShoppingCartIcon>
      <p>Your cart is currently empty!</p>
      <S.CustomLink to="/">
        <AiOutlineArrowLeft size={20} color="#fff" />
        <span>Start Shopping</span>
      </S.CustomLink>
    </S.EmptyContainer>
  )
}

export default EmptyCartCheckout
