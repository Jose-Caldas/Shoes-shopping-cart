import * as S from './styles'
import { useAppDispatch } from '../../app/hooks'
import { addProduct } from '../../features/cart/cartSlice'
import { IProduct } from '../../interface'
import { FiHeart } from 'react-icons/fi'

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
      <S.CardDetails>
        <S.CardHeader>
          <p>30% Off</p>
          <FiHeart onClick={() => console.log('clicou')} />
        </S.CardHeader>
        <div>
          <img className="card-img" src={product.img} alt={product.title} />
        </div>
        <S.AddCart to={`/cart`} onClick={handleProductClick}>
          <p>Add to Cart</p>
        </S.AddCart>
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
