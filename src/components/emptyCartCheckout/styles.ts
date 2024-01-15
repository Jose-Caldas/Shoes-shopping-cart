import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  margin-top: 2rem;

  p {
    color: #495057;
    font-weight: 300;
  }
`

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 0.7rem 1rem;
  color: #fff;
  letter-spacing: 1.15px;
  text-decoration: none;
  background: #222;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }
`

export const ShoppingCartIcon = styled.div`
  svg {
    font-size: 500px;

    @media screen and (max-width: 600px) {
      font-size: 200px;
    }
  }
`
