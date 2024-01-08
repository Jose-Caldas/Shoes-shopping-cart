import { AiFillStar, AiOutlineDelete } from 'react-icons/ai'
import { IProduct } from '../../../interface'
import * as S from './styled'
import { useAppDispatch } from '../../../app/hooks'
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from '../../../features/cart/cartSlice'

export interface CartItemMobileProps {
  product: IProduct
}

function CartItemMobile({ product }: CartItemMobileProps) {
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
      <S.CartContent>
        <S.CartItemImage>
          <img src={product.img} alt={product.title} />
        </S.CartItemImage>

        <S.CartItemInfo>
          <p>{product.title}</p>
          <div>
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <p>{product.reviews}</p>
          </div>
          <S.PriceContainer>
            <p>
              {product.quantity} x ${product.newPrice}
            </p>
            {product.quantity && product.quantity > 1 && (
              <span>Total: ${product.quantity * product.newPrice}</span>
            )}
          </S.PriceContainer>

          <S.CartItemQuantity>
            {product.quantity && (
              <button
                onClick={handleDecreaseClick}
                disabled={product.quantity <= 1}
                aria-label={`Decrease quantity of ${product.title}`}
              >
                -
              </button>
            )}
            <p>{product.quantity}</p>
            <button
              onClick={handleIncreaseClick}
              aria-label={`Increase quantity of ${product.title}`}
            >
              +
            </button>
          </S.CartItemQuantity>
        </S.CartItemInfo>

        <S.RemoveButton
          onClick={handleRemoveClick}
          aria-label={`Remove ${product.title}`}
        >
          <AiOutlineDelete size={25} color="#e63946" />
        </S.RemoveButton>
      </S.CartContent>
    </S.CartItemContainer>
  )
}

export default CartItemMobile
