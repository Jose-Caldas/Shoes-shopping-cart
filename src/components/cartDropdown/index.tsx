import { IProduct } from '../../interface'
import { AiOutlineDelete } from 'react-icons/ai'
import * as S from './styles'
import { useAppDispatch } from '../../app/hooks'
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from '../../features/cart/cartSlice'

interface CartModalProps {
  product: IProduct
  closeDropdown: () => void
}

function CartDropdown({ product, closeDropdown }: CartModalProps) {
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
    <S.CartModalContainer>
      <S.Description>
        <S.CustomLink to={`/product/${product.id}`} onClick={closeDropdown}>
          <S.ImageBox>
            <img src={product.img} alt={product.title} />
          </S.ImageBox>
          <p>{product.title}</p>
        </S.CustomLink>

        <AiOutlineDelete
          color="#e63946"
          cursor="pointer"
          onClick={handleRemoveClick}
          size={20}
        />
      </S.Description>
      <S.SaleDescription>
        <h2>Quantity: {product.quantity}</h2>
        <S.QuantityUpdate>
          {product.quantity && (
            <button
              onClick={handleDecreaseClick}
              disabled={product.quantity <= 1}
            >
              -
            </button>
          )}
          <button onClick={handleIncreaseClick}>+</button>
        </S.QuantityUpdate>
        {product.quantity && (
          <strong>${product.quantity * product.newPrice},00</strong>
        )}
      </S.SaleDescription>
    </S.CartModalContainer>
  )
}

export default CartDropdown
