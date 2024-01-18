import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  padding: 0 20px;

  flex-direction: column;

  margin-top: 1rem;
`

export const CartContent = styled.div`
  display: flex;
  gap: 1rem;
  border-top: 1px solid #eee;
  padding-top: 1rem;

  @media screen and (max-width: 500px) {
    gap: 0.5rem;
  }
`

export const CartItemImage = styled.div`
  max-width: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  border-radius: 10px;

  @media screen and (max-width: 500px) {
    width: 100px;
  }

  img {
    width: 100%;
  }
`

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }

  p:nth-child(2) {
    font-weight: 500;
  }

  .rating-star {
    color: #d5ab55;
  }
`

export const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  p {
    margin-left: 10px;
    margin-right: 10px;
  }

  button {
    border: none;
    background: none;
    font-size: 1.5rem;
  }
`

export const RemoveButton = styled.div`
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`

export const PriceContainer = styled.div`
  p {
    margin: 10px 0;
  }
`
