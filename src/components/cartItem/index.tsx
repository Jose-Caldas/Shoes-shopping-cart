import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'

import * as S from './styles'
import { useAppDispatch } from '../../app/hooks'
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from '../../features/cart/cartSlice'
import { IProduct } from '../../interface/index'

export interface CartItemProps {
  product: IProduct
}

function CartItem({ product }: CartItemProps) {
  const dispatch = useAppDispatch()

  const handleRemoveClick = () => {
    dispatch(removeProductFromCart(product.id))
  }

  const handleIncreaseClick = () => {
    dispatch(increaseProductQuantity(product.id))
  }

  const handleDecreaseClick = () => {
    dispatch(decreaseProductQuantity(product.id))
  }

  return (
    <S.CartItemContainer>
      <S.CartItemImage>
        <img src={product.img} alt={product.title} />
      </S.CartItemImage>

      <S.CartItemInfo>
        <p>{product.title}</p>
        <p>R${product.newPrice}</p>

        <S.CartItemQuantity>
          <AiOutlineMinus
            size={20}
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${product.title}`}
          />
          <p>{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={handleIncreaseClick}
            aria-label={`Increase quantity of ${product.title}`}
          />
        </S.CartItemQuantity>
      </S.CartItemInfo>

      <S.RemoveButton
        onClick={handleRemoveClick}
        aria-label={`Remove ${product.title}`}
      >
        <p>Remove</p>
      </S.RemoveButton>
    </S.CartItemContainer>
  )
}

export default CartItem
