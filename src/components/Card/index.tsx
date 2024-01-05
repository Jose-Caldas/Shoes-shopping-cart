import React from 'react'
import { BsCartPlus } from 'react-icons/bs'
import * as S from './styles'
import { useAppDispatch } from '../../app/hooks'
import { addProduct } from '../../features/cart/cartSlice'
import { AiFillStar } from 'react-icons/ai'
import { IProduct } from '../../interface'

export interface CardProps {
  product: IProduct
}

function Card({ product }: CardProps) {
  const dispatch = useAppDispatch()

  const handleProductClick = () => {
    dispatch(addProduct(product))
  }
  return (
    <S.CardContainer>
      <img className="card-img" src={product.img} alt={product.title} />
      <S.CardDetails>
        <S.CardTitle>{product.title}</S.CardTitle>
        <S.CardReviews>
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />

          <span className="total-reviews">{product.reviews}</span>
        </S.CardReviews>

        <S.CardPrice>
          <S.Price>
            <del>${product.prevPrice},00</del>
            <span>{product.newPrice}</span>
          </S.Price>
          <S.AddCart to="/cart" onClick={handleProductClick}>
            <BsCartPlus />
            Add To Cart
          </S.AddCart>
        </S.CardPrice>
      </S.CardDetails>
    </S.CardContainer>
  )
}

export default Card
