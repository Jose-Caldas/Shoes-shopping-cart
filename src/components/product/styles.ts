import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
    font-size: 1.5rem;
  }
`

export const AddCart = styled(Link)`
  width: 100%;
  background-color: transparent;
  color: #000;
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

  &:hover {
    cursor: pointer;
    background-color: #252422;
    color: white;
  }

  svg {
    margin-right: 0.5rem;
  }
`
