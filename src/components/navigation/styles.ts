import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Navigation = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: #222222;
  position: fixed;
  top: 0;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 20px 16px;
  }

  .logo-mobile {
    display: none;

    @media screen and (max-width: 768px) {
      display: block;
    }

    @media screen and (max-width: 340px) {
      display: none;
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

  @media screen and (max-width: 330px) {
    position: absolute;
    top: 28px;
    right: 16px;
  }
`
