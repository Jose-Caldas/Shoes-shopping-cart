import { useSelector } from 'react-redux'
import { selectProductsTotalPrice } from '../../app/cartSelectors'
import { useAppSelector } from '../../app/hooks'
import CartItem from '../cartItem'
import * as S from './styles'

interface CartProps {
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
}

const Cart = ({ isVisible, setIsVisible }: CartProps) => {
  const { products } = useAppSelector((state) => state.cart)
  const productsTotalPrice = useSelector(selectProductsTotalPrice)
  const handleEscapeAreaClick = () => setIsVisible(false)

  return (
    <S.CartContainer isvisible={isVisible}>
      <S.CartEscapeArea onClick={handleEscapeAreaClick} />
      <S.CartContent>
        <S.CartHeader>
          <S.CartTitle>Seu Carrinho</S.CartTitle>
          <button onClick={() => setIsVisible(false)}>Fechar</button>
        </S.CartHeader>
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))
        ) : (
          <p>Carrinho vazio!</p>
        )}
        {products.length > 0 && (
          <S.CartTotal>
            <span>Valor Total da Compra:</span> R$ {productsTotalPrice}
          </S.CartTotal>
        )}
      </S.CartContent>
    </S.CartContainer>
  )
}

export default Cart
