import { SetStateAction, useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import {
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
  AiOutlineClose,
} from 'react-icons/ai'
import * as S from './styles'
import { selectProductsCount } from '../../app/cartSelectors'
import { useAppSelector } from '../../app/hooks'

export type NavigationProps = {
  handleInputChange: (event: {
    target: { value: SetStateAction<string> }
  }) => void
  query: string
}

function Navigation({ handleInputChange, query }: NavigationProps) {
  const [showFilter, setShowFilter] = useState(false)

  const productsCount = useAppSelector(selectProductsCount)

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
      <S.MobileMenu onClick={() => setShowFilter(true)}>Filter</S.MobileMenu>
      {showFilter && (
        <S.FilterContainer>
          <S.FilterContent>
            <div className="filter-header">
              <p>Fiters</p>
              <AiOutlineClose onClick={() => setShowFilter(false)} />
            </div>
            <div className="filter-content">
              <p>Category</p>
              <p>Price</p>
              <p>Colors</p>
            </div>
          </S.FilterContent>
        </S.FilterContainer>
      )}
      <S.Profile>
        <a href="/">
          <FiHeart className="nav-icons" />
        </a>
        <S.CartView to="/cart">
          <AiOutlineShoppingCart className="nav-icons" />
          <p>({productsCount})</p>
        </S.CartView>
        <a href="/">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </S.Profile>
    </S.Navigation>
  )
}

export default Navigation
