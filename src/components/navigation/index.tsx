import { useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'

import * as S from './styles'

function Navigation() {
  const [showFilter, setShowFilter] = useState(false)

  const handleCartClick = () => {}

  return (
    <S.Navigation>
      <div className="nav-container">
        <S.Logo>🛒</S.Logo>
        <S.SearchInput
          className="search-input"
          type="text"
          placeholder="Enter your search shoes."
        />
      </div>
      <S.MobileMenu onClick={() => setShowFilter(true)}>Menu</S.MobileMenu>
      <S.FilterContainer isVisible={showFilter}>
        {showFilter && (
          <>
            <div className="content">
              <p>Fiters</p>
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
