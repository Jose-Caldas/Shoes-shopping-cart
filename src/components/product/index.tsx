import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Link } from 'react-router-dom'
import * as S from './styles'
import {
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineShoppingCart,
  AiFillCheckCircle,
} from 'react-icons/ai'
import { selectProductsCount } from '../../app/cartSelectors'
import { FiHeart } from 'react-icons/fi'
import products from '../../data/products'
import { addProduct } from '../../features/cart/cartSlice'
import { useState } from 'react'

function Product() {
  const dispatch = useAppDispatch()
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleBuyNowProductClick = () => {
    dispatch(addProduct(product))
  }
  const handleAddProductClick = () => {
    dispatch(addProduct(product))
    setIsOpenModal(true)
  }

  const handleModalClick = () => {
    setIsOpenModal(false)
  }

  const params = useParams()
  const productsCount = useAppSelector(selectProductsCount)
  const product = products.find((item) => item.id === params.id)

  if (product === undefined) return null

  return (
    <S.ProductContainer>
      <S.Header>
        <S.HeaderContent>
          <S.Logo to="/">SH🛒PPING</S.Logo>
          <S.CartView to="/cart">
            <AiOutlineShoppingCart color="#fff" size={30} />
            <p>({productsCount})</p>
          </S.CartView>
        </S.HeaderContent>
      </S.Header>
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
            <span>or 5x of ${product.newPrice / 5},00</span>
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
          <span>Return Shopping</span>
        </S.ReturnShopping>
      </S.ProductCard>
      {isOpenModal && (
        <S.Modal>
          <S.ModalContent>
            <AiFillCheckCircle fill="green" size={40} />
            <p>Product added to cart</p>
            <Link className="continue" to="/" onClick={handleModalClick}>
              Continue Shopping
            </Link>
            <Link className="go-to" to="/Cart" onClick={handleModalClick}>
              Go to Cart
            </Link>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.ProductContainer>
  )
}

export default Product

// https://youtu.be/zC4zRlQVDAw
