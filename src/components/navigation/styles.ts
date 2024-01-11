import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Navigation = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: #222222;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  @media screen and (max-width: 768px) {
    padding: 20px 16px;
  }

  .logo-mobile {
    display: none;

    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`

export const Logo = styled.div`
  color: #fff;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SearchInput = styled.input`
  padding: 12px 20px;
  border: none;
  background: #f7f6f6;
  outline: none;
  border-radius: 5px;
  width: 14rem;

  @media screen and (max-width: 768px) {
    padding: 12px;
  }

  @media screen and (max-width: 320px) {
    width: 150px;
    font-size: 10px;
  }
`

export const Profile = styled.div`
  display: flex;
  color: #fff;

  p {
    color: #fff;
  }
`

export const CartView = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  text-decoration: none;

  p {
    font-size: 1.5rem;
  }
`
