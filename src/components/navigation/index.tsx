import { SetStateAction, useEffect, useRef, useState } from 'react'
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai'
import * as S from './styles'
import { selectProductsCount } from '../../app/cartSelectors'
import { useAppSelector } from '../../app/hooks'
import CartDropdown from '../cartDropdown'
import { Link } from 'react-router-dom'
import EmptyCartDropdown from '../emptyCartDropdown'

export type NavigationProps = {
  handleInputChange: (event: {
    target: { value: SetStateAction<string> }
  }) => void
  query: string
}

function Navigation({ handleInputChange, query }: NavigationProps) {
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const productsCount = useAppSelector(selectProductsCount)
  const { products } = useAppSelector((state) => state.cart)

  const handleOpenDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  const handleCloseDropdown = () => {
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    let handler = (e: { target: any }) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])

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
        <S.CartView onClick={handleOpenDropdown} disabled={isDropdownOpen}>
          <AiOutlineShoppingCart color="#fff" size={30} />
          <p>({productsCount})</p>
        </S.CartView>
      </S.Profile>

      {isDropdownOpen && (
        <S.Modal className="animation-top" ref={dropdownRef}>
          {products.length > 0 ? (
            <>
              <S.ModalHeader>
                <h1>Shopping Cart</h1>
                <AiOutlineClose
                  onClick={handleCloseDropdown}
                  size={25}
                  color="#e63946"
                  cursor="pointer"
                />
              </S.ModalHeader>
              {products.map((product) => (
                <CartDropdown
                  key={product.id}
                  product={product}
                  closeDropdown={handleCloseDropdown}
                />
              ))}
              <div className="link">
                <Link className="buy-now-link" to="/cart">
                  Buy Now
                </Link>
              </div>
            </>
          ) : (
            <EmptyCartDropdown handleCloseDropdown={handleCloseDropdown} />
          )}
        </S.Modal>
      )}
    </S.Navigation>
  )
}

export default Navigation
