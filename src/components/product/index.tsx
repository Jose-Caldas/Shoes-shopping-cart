import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Link } from 'react-router-dom'
import {
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineShoppingCart,
  AiFillCheckCircle,
  AiOutlineClose,
} from 'react-icons/ai'
import {
  FaCcMastercard,
  FaCcVisa,
  FaCcApplePay,
  FaGooglePay,
} from 'react-icons/fa'
import { selectProductsCount } from '../../app/cartSelectors'
import { FiHeart } from 'react-icons/fi'
import products from '../../data/products'
import { addProduct } from '../../features/cart/cartSlice'
import { useEffect, useRef, useState } from 'react'
import CartModal from '../cartModal'
import EmptyCartDropdown from '../emptyCartDropdown'
import * as S from './styles'
import Accordion from '../accordion'

interface ModalItemProps {
  id: string
  img: string
  title: string
  reviews: string
  prevPrice: number
  newPrice: number
  company?: string
  color?: string
  category?: string
  quantity?: number
}

function Product() {
  const modalRef = useRef<HTMLDivElement | null>(null)

  const dispatch = useAppDispatch()
  const params = useParams()

  const productsCount = useAppSelector(selectProductsCount)
  const product = products.find((item) => item.id === params.id)

  const [isOpenModalInfo, setIsOpenModalInfo] = useState(false)
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  const storage = localStorage.getItem('cartItems')
  const cartItems: ModalItemProps[] = storage && JSON.parse(storage)

  const handleBuyNowProductClick = () => {
    dispatch(addProduct(product))
  }

  const handleAddProductClick = () => {
    dispatch(addProduct(product))
    setIsOpenModalInfo(true)
  }

  const handleCloseModalInfo = () => {
    setIsOpenModalInfo(false)
  }

  const handleOpenModal = () => {
    setIsOpenDropdown(!isOpenDropdown)
  }
  const handleCloseDropdown = () => {
    setIsOpenDropdown(false)
  }

  useEffect(() => {
    let handler = (e: { target: any }) => {
      if (!modalRef.current?.contains(e.target)) {
        setIsOpenDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])

  if (product === undefined)
    return (
      <div>
        <p>Oops! something went wrong</p>
      </div>
    )

  return (
    <S.ProductContainer>
      <S.Header>
        <S.HeaderContent>
          <S.Logo to="/">SH🛒PPING</S.Logo>
          <S.CartView onClick={handleOpenModal} disabled={isOpenDropdown}>
            <AiOutlineShoppingCart color="#fff" size={30} />
            <p>({productsCount})</p>
          </S.CartView>
        </S.HeaderContent>
      </S.Header>
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ProductCard>
        <div>
          <S.ImageBox>
            <img src={product.img} alt={product.title} />
          </S.ImageBox>
          <S.Reviews>
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />

            <span className="total-reviews">{product.reviews}</span>
            <S.PriceContainer>
              <p>30% Off</p>
              <S.CardPrice>
                <S.Price>
                  <del>${product.prevPrice},00</del>
                  <span>${product.newPrice},00</span>
                </S.Price>
              </S.CardPrice>
            </S.PriceContainer>
          </S.Reviews>
          <S.SizesContainer>
            <h1>Sizes</h1>
            <S.SizesGrid>
              <span>35</span>
              <span>36</span>
              <span>37</span>
              <span>38</span>
              <span>39</span>
              <span>40</span>
              <span>42</span>
              <span>44</span>
            </S.SizesGrid>
          </S.SizesContainer>
        </div>
        <S.SummaryContainer>
          <h2>Summary</h2>

          <S.IconBox>
            <p>Best Price</p>
            <FiHeart />
          </S.IconBox>
          <h3>{product.title}</h3>
          <h4>
            ${product.newPrice},00{' '}
            <span>or in 5 installments of ${product.newPrice / 5},00</span>
          </h4>
          <S.LinksContainer>
            <S.AddToCartLink to="" onClick={handleAddProductClick}>
              Add to Cart
            </S.AddToCartLink>
            <S.BuyNowLink to="/cart" onClick={handleBuyNowProductClick}>
              Buy Now
            </S.BuyNowLink>
          </S.LinksContainer>
        </S.SummaryContainer>
        <S.ReturnShopping to="/">
          <AiOutlineArrowLeft size={20} />
          <span>Continue Shopping</span>
        </S.ReturnShopping>
      </S.ProductCard>
      <Accordion />
      {isOpenModalInfo && (
        <S.Modal>
          <S.ModalContent>
            <AiFillCheckCircle fill="green" size={40} />
            <p>Product added to cart</p>
            <Link className="continue" to="/" onClick={handleCloseModalInfo}>
              Continue Shopping
            </Link>
            <Link className="go-to" to="/Cart" onClick={handleCloseModalInfo}>
              Go to Cart
            </Link>
          </S.ModalContent>
        </S.Modal>
      )}
      {isOpenDropdown && (
        <S.CartModal ref={modalRef}>
          {cartItems?.length > 0 ? (
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
              {cartItems.map((item) => (
                <CartModal key={item.id} product={item} />
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
        </S.CartModal>
      )}
      <S.Payments>
        <S.CardsContainer>
          <p>Payment Methods:</p>
          <S.Cards>
            <FaCcMastercard size={40} />
            <FaCcVisa size={40} />
            <FaCcApplePay size={40} />
            <FaGooglePay size={40} />
          </S.Cards>
        </S.CardsContainer>
      </S.Payments>
    </S.ProductContainer>
  )
}

export default Product
