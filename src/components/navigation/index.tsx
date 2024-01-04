import { SetStateAction, useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import {
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
  AiOutlineClose,
} from 'react-icons/ai'
import * as S from './styles'

export type NavigationProps = {
  handleInputChange: (event: {
    target: { value: SetStateAction<string> }
  }) => void
  query: string
}

function Navigation({ handleInputChange, query }: NavigationProps) {
  const [showFilter, setShowFilter] = useState(false)
  const [cartIsVisible, setCartIsVisible] = useState(false)

  const handleCartClick = () => {
    setCartIsVisible(true)
  }

  return (
    <S.Navigation>
      <div className="nav-container">
        <S.Logo>🛒</S.Logo>
        <S.SearchInput
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <S.MobileMenu onClick={() => setShowFilter(true)}>Menu</S.MobileMenu>
      <S.FilterContainer isVisible={showFilter}>
        {showFilter && (
          <>
            <div className="content">
              <p>Fiters</p>
              <AiOutlineClose onClick={() => setShowFilter(false)} />
            </div>
            <div>
              <p>Category</p>
              <p>Price</p>
              <p>Colors</p>
            </div>
          </>
        )}
      </S.FilterContainer>
      <S.Profile>
        <a href="/">
          <FiHeart className="nav-icons" />
        </a>
        <S.CartView onClick={handleCartClick}>
          <AiOutlineShoppingCart className="nav-icons" />
          <p>(0)</p>
        </S.CartView>
        <a href="/">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </S.Profile>
    </S.Navigation>
  )
}

export default Navigation
