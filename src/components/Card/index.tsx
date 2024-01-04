import { BsFillBagHeartFill } from 'react-icons/bs'
import * as S from './styles'

import { AiFillStar } from 'react-icons/ai'
import { IProduct } from '../../interface'

export interface CardProps {
  product: IProduct
}

function Card({ product }: CardProps) {
  const handleProductClick = () => {}
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
          <S.Bag onClick={handleProductClick}>
            <BsFillBagHeartFill className="bag-icon" />
          </S.Bag>
        </S.CardPrice>
      </S.CardDetails>
    </S.CardContainer>
  )
}

export default Card
