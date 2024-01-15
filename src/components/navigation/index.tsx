import { SetStateAction, useEffect, useRef, useState } from 'react'
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai'
import * as S from './styles'
import { selectProductsCount } from '../../app/cartSelectors'
import { useAppSelector } from '../../app/hooks'
import CartModal from '../cartModal'
import { Link } from 'react-router-dom'
import EmptyCartDropdown from '../emptyCartDropdown'

export type NavigationProps = {
  handleInputChange: (event: {
    target: { value: SetStateAction<string> }
  }) => void
  query: string
}

function Navigation({ handleInputChange, query }: NavigationProps) {
  const modalRef = useRef<HTMLDivElement | null>(null)

  const [isModalOpen, setIsmodalOpen] = useState(false)
  const productsCount = useAppSelector(selectProductsCount)
  const { products } = useAppSelector((state) => state.cart)

  const handleOpenModal = () => {
    setIsmodalOpen(!isModalOpen)
  }
  const handleCloseDropdown = () => {
    setIsmodalOpen(false)
  }

  useEffect(() => {
    let handler = (e: { target: any }) => {
      if (modalRef.current !== null && !modalRef.current.contains(e.target)) {
        setIsmodalOpen(false)
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
        <S.CartView onClick={handleOpenModal} disabled={isModalOpen}>
          <AiOutlineShoppingCart color="#fff" size={30} />
          <p>({productsCount})</p>
        </S.CartView>
      </S.Profile>

      {isModalOpen && (
        <S.Modal ref={modalRef}>
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
                <CartModal key={product.id} product={product} />
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
