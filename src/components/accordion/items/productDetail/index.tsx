import { useParams } from 'react-router-dom'
import products from '../../../../data/products'
import * as S from './styles'

function ProductlDetail() {
  const params = useParams()
  const product = products.find((item) => item.id === params.id)

  return (
    <S.Container>
      <ul>
        <li>
          Product: <span>{product?.title}</span>
        </li>
        <li>
          Customer Reviews: <span>{product?.reviews}</span>
        </li>
        <li>
          Price: <span>$ {product?.newPrice}</span>
        </li>
        <li>
          Company: <span>{product?.company}</span>
        </li>
        <li>
          Category: <span>{product?.category}</span>
        </li>
        <li>
          Color: <span>{product?.color}</span>
        </li>
      </ul>
    </S.Container>
  )
}

export default ProductlDetail
