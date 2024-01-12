import React from 'react'
import { IProduct } from '../../interface'
import { AiOutlineDelete } from 'react-icons/ai'
import * as S from './styles'
import { useAppDispatch } from '../../app/hooks'
import { removeProductFromCart } from '../../features/cart/cartSlice'

interface CartModalProps {
  product: IProduct
}

function CartModal({ product }: CartModalProps) {
  const dispatch = useAppDispatch()

  const handleRemoveClick = () => {
    dispatch(removeProductFromCart(product.id))
  }

  return (
    <S.CartModalContainer>
      <S.CartModalContent>
        <S.ImageBox>
          <img src={product.img} alt={product.title} />
        </S.ImageBox>
        <S.Description>
          <S.DescriptionHeader>
            <p>{product.title}</p>
            <AiOutlineDelete
              color="#e63946"
              cursor="pointer"
              onClick={handleRemoveClick}
            />
          </S.DescriptionHeader>
          <S.PriceContainer>
            <h2>Quantity: {product.quantity}</h2>
            {product.quantity && (
              <strong>${product.quantity * product.newPrice},00</strong>
            )}
          </S.PriceContainer>
        </S.Description>
      </S.CartModalContent>
    </S.CartModalContainer>
  )
}

export default CartModal
