import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { Link } from 'react-router-dom'
import * as S from './styles'
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai'
import { selectProductsCount } from '../../app/cartSelectors'

function Product() {
  const { products } = useAppSelector((state) => state.cart)
  const { id } = useParams()
  const productsCount = useAppSelector(selectProductsCount)

  const product = products.find((item) => item.id === id)

  if (!product) return null

  return (
    <div>
      <S.Header>
        <S.HeaderContent>
          <S.Logo to="/">SH🛒PPING</S.Logo>
          <S.CartView to="/cart">
            <AiOutlineShoppingCart color="#fff" size={30} />
            <p>({productsCount})</p>
          </S.CartView>
        </S.HeaderContent>
      </S.Header>
      <div>
        <div>
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />

          <span className="total-reviews">{product.reviews}</span>
        </div>
        <p>{product.title}</p>
        <Link to="/cart">Finalizar Compra</Link>
        <Link to="/">Continuar comprando</Link>
      </div>
    </div>
  )
}

export default Product
