import * as S from './styles'
import { IProduct } from '../../interface'
import { FiHeart } from 'react-icons/fi'
import { useEffect, useState } from 'react'

export interface CardProps {
  product: IProduct
}

function Card({ product }: CardProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  useEffect(() => {
    const favoriteItems = JSON.parse(
      localStorage.getItem('favoritedItems') || '{}'
    )
    setIsFavorited(favoriteItems[product.id] || false)
  }, [product.id])

  const handleFavoriteClick = () => {
    const favoritedItems = JSON.parse(
      localStorage.getItem('favoritedItems') || '{}'
    )
    const newFavoritedStatus = !isFavorited
    favoritedItems[product.id] = newFavoritedStatus
    setIsFavorited(newFavoritedStatus)
    localStorage.setItem('favoritedItems', JSON.stringify(favoritedItems))
  }

  return (
    <S.CardContainer>
      <S.CardDetails>
        <S.CardHeader>
          <p>30% Off</p>
          <FiHeart
            color={isFavorited ? '#f6bd60' : '#444'}
            fill={isFavorited ? '#f6bd60' : '#fafafa'}
            onClick={handleFavoriteClick}
            title="Favorite"
          />
        </S.CardHeader>
        <div>
          <img className="card-img" src={product.img} alt={product.title} />
        </div>
        <S.AddCart to={`/product/${product.id}`} title="Add to Cart" />
      </S.CardDetails>
      <S.CardFooter>
        <S.CardTitle>{product.title}</S.CardTitle>
        <S.CardPrice>
          <S.Price>
            <del>${product.prevPrice},00</del>
            <span>${product.newPrice},00</span>
          </S.Price>
        </S.CardPrice>
      </S.CardFooter>
    </S.CardContainer>
  )
}

export default Card
