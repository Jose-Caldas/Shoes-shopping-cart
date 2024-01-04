import * as S from './styles'
import products from '../../data/product'
import Card from '../Card'

function Products() {
  return (
    <S.Container>
      <S.Products>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </S.Products>
    </S.Container>
  )
}

export default Products
