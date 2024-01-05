import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CartContainer = styled.div`
  p {
    color: #222222;
  }

  svg {
    color: #222222;
  }
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

export const CartTitle = styled.p`
  font-size: 1.325rem;
  font-weight: 600;
  margin-bottom: 2rem;
`

export const CartTotal = styled.p`
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
  border-bottom: 1px solid #eee;
  padding: 1rem 2rem;
`

export const Logo = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #222;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1600px;
`

export const CartView = styled(Link)`
  display: flex;
  text-decoration: none;
`

export const ReturnShop = styled(Link)`
  display: flex;
  gap: 0.5rem;
  text-decoration: none;
  color: #444444;
`
