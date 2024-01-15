import * as S from './styles'
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai'

interface EmptyCartDropdownProps {
  handleCloseDropdown: () => void
}

function EmptyCartDropdown({ handleCloseDropdown }: EmptyCartDropdownProps) {
  return (
    <S.EmptyCartContainer>
      <S.Header>
        <h1>Shopping Cart</h1>
        <AiOutlineClose
          onClick={handleCloseDropdown}
          size={25}
          color="#e63946"
          cursor="pointer"
        />
      </S.Header>

      <S.Message>Your cart is currently empty!</S.Message>

      <S.ShoppingCartIcon>
        <AiOutlineShoppingCart />
      </S.ShoppingCartIcon>
    </S.EmptyCartContainer>
  )
}

export default EmptyCartDropdown
