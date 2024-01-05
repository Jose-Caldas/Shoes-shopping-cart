import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px;

  p {
    color: #222222;
  }
`

export const CartItemImage = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;

  img {
    padding: 10px;
    width: 10rem;
  }
`

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  flex: 1;

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }

  p:nth-child(2) {
    font-weight: 500;
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

  svg:hover {
    cursor: pointer;
  }
`

export const RemoveButton = styled.div`
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`
