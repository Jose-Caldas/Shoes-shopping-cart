import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Navigation = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #222222;

  .nav-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav-icons {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 2rem;
    color: #494949;
  }
`

export const Logo = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const SearchInput = styled.input`
  padding: 12px 20px;
  border: none;
  background: #f7f6f6;
  outline: none;
  margin-right: 20px;
  border-radius: 5px;
  position: relative;
  width: 14rem;
`

export const MobileMenu = styled.button`
  display: none;
  border: none;
  padding: 0.5rem 1rem;
  background-color: green;
  color: #fff;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const Profile = styled.div`
  display: flex;

  color: #fff;

  p {
    color: #fff;
  }

  .nav-icons {
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const FilterContainer = styled.div`
  background-color: transparent;
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`

export const FilterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;

  background-color: #fff;
  padding: 1rem;

  .filter-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .filter-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

export const CartView = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  text-decoration: none;
`
