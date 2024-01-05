import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Navigation = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin-left: 2rem;
  border-bottom: 2px solid #f3f3f3;
  z-index: 999;

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

  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const Profile = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

type FilterContainerProps = {
  isVisible: boolean
}

export const FilterContainer = styled.div<FilterContainerProps>`
  padding: 10px;

  ${({ isVisible }) => css`
    overflow-y: scroll;
    display: none;
    width: 18rem;
    height: 100%;
    z-index: 999;
    position: absolute;
    top: 0;
    right: 0;

    background-color: red;
    visibility: ${isVisible ? 'visible' : 'hidden'};
    transform: translate(${isVisible ? '0px' : '110px'});
    transition: transform 0.3s;

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    @media screen and (max-width: 768px) {
      display: inline-block;
    }
  `};
`

export const CartView = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  text-decoration: none;
`
