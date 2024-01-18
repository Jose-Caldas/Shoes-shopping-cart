import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CartModalContainer = styled.section`
  margin-bottom: 2rem;
  margin: 0.5rem 0;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const CustomLink = styled(Link)`
  display: flex;
  gap: 1rem;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }

  p {
    color: #444444;
  }
`

export const ImageBox = styled.div`
  max-width: 100px;
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

export const SaleDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 14px;
    color: #444444;
  }
`

export const QuantityUpdate = styled.div`
  display: flex;

  button {
    border: none;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: #eee;
      border-radius: 4px;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`
