import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CartContainer = styled.div`
  p {
    color: #222222;
  }

  svg {
    color: #222222;
  }

  /* ========================================================= */

  .list-container {
    padding: 2rem 4rem;
  }
  .titles {
    margin: 2rem 0 1rem 0;

    h3 {
      font-size: 14px;
      font-weight: 400;
      text-transform: uppercase;
    }
  }

  .cart-item,
  .titles {
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    column-gap: 0.5rem;
  }

  .cart-item {
    border-top: 1px solid #eee;
    padding: 1rem 0;
  }

  .titles .product-title {
    padding-left: 0.5rem;
  }

  .titles .total {
    padding-right: 0.5rem;
    justify-self: right;
  }

  .cart-item .cart-product {
    display: flex;
  }

  .cart-item .cart-product img {
    width: 10rem;
    max-width: 100%;
  }

  .cart-item .cart-product h3 {
    font-weight: 400;
  }

  .cart-item .cart-product button {
    border: none;
    outline: none;
    margin-top: 0.7rem;
    cursor: pointer;
    background: none;
    color: gray;

    &:hover {
      color: black;
    }
  }

  .cart-product-quantity {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 130px;
    max-width: 100%;
    border: 1px solid rgb(177, 177, 177);
    border-radius: 5px;

    button {
      border: none;
      outline: none;
      background: none;
      padding: 0.7rem 1.5rem;
      cursor: pointer;
    }

    .count {
      padding: 0.7rem 0;
    }
  }

  .cart-product-total-price {
    justify-self: right;
    padding-right: 0.5rem;
    font-weight: bold;
  }

  /* Cart summary */

  .cart-summary {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-top: 1px solid #eee;
    padding-top: 2rem;

    .clear-cart {
      width: 130px;
      height: 40px;
      background-color: transparent;
      color: gray;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      border: 1px solid #eee;
      font-weight: 600;
      transition: all 0.5s ease;
      text-decoration: none;
      letter-spacing: 1.15px;

      &:hover {
        cursor: pointer;
        background-color: #252422;
        color: white;
      }
    }
  }

  .cart-checkout {
    width: 290px;
    max-width: 100%;
    padding-right: 0.5rem;

    .subtotal {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;

      .amount {
        font-weight: bold;
      }
    }

    p {
      font-size: 14px;
      font-weight: 200;
      margin: 0.5rem 0;
      color: gray;
    }

    button {
      width: 100%;
      background-color: #252422;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      border: 1px solid #eee;
      margin-top: 1rem;
      padding: 10px;
      font-weight: 600;
      transition: all 0.5s ease;
      text-decoration: none;
      letter-spacing: 1.15px;

      &:hover {
        cursor: pointer;
        background-color: #000;
      }
    }

    .continue-shopping {
      margin-top: 1rem;

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        gap: 0.5rem;
        color: gray;
        letter-spacing: 1.15px;
      }
    }
  }

  /* ======================================================== */
`

export const CartContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`

export const ProductContainer = styled.div`
  width: 100%;
  padding: 0 6rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-around;
  font-weight: 600;
  font-size: 1.125rem;

  span {
    font-weight: 400;
  }
`

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  button {
    border: none;
    background: transparent;
    color: #ef233c;
    font-size: 1.325rem;

    cursor: pointer;
  }
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  background-color: #222222;
  height: 79px;
`

export const Logo = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #fff;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const CartView = styled(Link)`
  display: flex;
  text-decoration: none;

  p {
    color: #fff;
  }
`

export const CartTitle = styled.h2`
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  margin-top: 2rem;
`

export const ReturnShop = styled(Link)`
  display: flex;
  gap: 0.5rem;
  text-decoration: none;
  color: #444444;
`
