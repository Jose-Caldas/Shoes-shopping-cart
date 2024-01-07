import { Link } from 'react-router-dom'
import * as S from './styles'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function EmptyCart() {
  return (
    <S.EmptyContainer>
      <div>
        <p>Your cart is currently empty</p>
        <div className="start-shopping">
          <Link to="/">
            <AiOutlineArrowLeft size={20} />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    </S.EmptyContainer>
  )
}

export default EmptyCart
