import * as S from './styles'

interface CartProps {
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
}

const Cart = ({ isVisible, setIsVisible }: CartProps) => {
  const handleEscapeAreaClick = () => setIsVisible(false)

  return (
    <S.CartContainer isvisible={isVisible}>
      <S.CartEscapeArea onClick={handleEscapeAreaClick} />
      <S.CartContent>
        <S.CartHeader>
          <S.CartTitle>Seu Carrinho</S.CartTitle>
          <button onClick={() => setIsVisible(false)}>Fechar</button>
        </S.CartHeader>

        <S.CartTotal>
          <span>Valor Total da Compra:</span> R$
        </S.CartTotal>
      </S.CartContent>
    </S.CartContainer>
  )
}

export default Cart
