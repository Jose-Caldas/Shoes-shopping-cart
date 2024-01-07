import { useAppDispatch } from '../../app/hooks'
import { AiFillStar } from 'react-icons/ai'
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from '../../features/cart/cartSlice'
import { IProduct } from '../../interface'

import * as S from './styles'

export interface CartPageProps {
  product: IProduct
}

function CartItem({ product }: CartPageProps) {
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
    <S.CartContainer>
      <S.Content>
        <div>
          <div className="cart-items">
            <div className="cart-item" key={product.id}>
              <div className="cart-product">
                <div className="image-container">
                  <img src={product.img} alt={product.title} />
                </div>
                <div>
                  <h3 className="product-name">{product.title}</h3>
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <p>{product.reviews}</p>
                  <button onClick={handleRemoveClick}>Remove</button>
                </div>
              </div>
              <div className="cart-product-price">${product.newPrice}</div>
              <div className="cart-product-quantity">
                {product.quantity && (
                  <button
                    onClick={handleDecreaseClick}
                    disabled={product.quantity <= 1}
                  >
                    -
                  </button>
                )}
                <div className="count">{product.quantity}</div>
                <button onClick={handleIncreaseClick}>+</button>
              </div>
              {product.quantity && (
                <div className="cart-product-total-price">
                  ${product.newPrice * product.quantity}
                </div>
              )}
            </div>
          </div>
        </div>
      </S.Content>
    </S.CartContainer>
  )
}

export default CartItem
