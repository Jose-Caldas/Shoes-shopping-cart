import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #222222;
  }

  svg {
    color: #222222;
  }

  /* ========================================================= */

  .titles {
    margin: 2rem 0 1rem 0;

    h3 {
      font-size: 14px;
      font-weight: 400;
      text-transform: uppercase;
    }
  }

  .titles {
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    column-gap: 0.5rem;
  }

  .titles .total {
    padding-right: 0.5rem;
    justify-self: right;
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

export const ProductContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  opacity: 0;
  transform: translateX(-20px);
  animation: animationLeft 0.3s forwards ease-in-out;

  @keyframes animationLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  @media (max-width: 864px) {
    display: none;
  }
`

export const ProductMobile = styled.section`
  display: none;
  margin-top: 1rem;

  @media (max-width: 864px) {
    display: flex;
    flex-direction: column;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
  padding: 0 1rem;

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
`

export const MobileSummary = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #eee;
  margin-top: 0.5rem;
  margin-bottom: 4rem;
  padding: 1rem;
  margin: 16px 20px;

  opacity: 0;
  transform: translateX(20px);
  animation: animationLeft 0.3s forwards ease-in-out;

  @keyframes animationLeft {
    to {
      opacity: 1;
      transform: initial;
    }
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
    color: #e63946;
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

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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

export const ReturnShopping = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;

    @media screen and (max-width: 480px) {
      font-size: 12px;
      gap: 4px;
    }
  }

  span {
    color: #fff;
  }
`

export const ModalRemove = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.5rem;
`
