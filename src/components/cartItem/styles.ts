import styled from 'styled-components'

export const CartContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  width: 100%;

  .cart-item {
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    column-gap: 0.5rem;
  }

  .cart-item {
    border-top: 1px solid #eee;
    padding: 1rem 0;
  }

  .cart-item .cart-product {
    display: flex;
  }

  .rating-star {
    color: #d5ab55;
  }

  .image-container {
    width: 210px;
  }

  .cart-item .cart-product img {
    width: 192px;
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
    color: red;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }

  .cart-product-quantity {
    display: flex;
    align-items: center;
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
      font-size: 24px;
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
`
