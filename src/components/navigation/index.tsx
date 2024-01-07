import { SetStateAction } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
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
  const productsCount = useAppSelector(selectProductsCount)

  return (
    <S.Navigation>
      <S.Logo>SH🛒PPING</S.Logo>
      <div className="logo-mobile">🛒</div>

      <S.SearchInput
        className="search-input"
        type="text"
        onChange={handleInputChange}
        value={query}
        placeholder="Enter your search shoes."
      />

      <S.Profile>
        <S.CartView to="/cart">
          <AiOutlineShoppingCart color="#fff" />
          <p>({productsCount})</p>
        </S.CartView>
      </S.Profile>
    </S.Navigation>
  )
}

export default Navigation
