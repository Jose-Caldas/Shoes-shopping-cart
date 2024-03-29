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
  z-index: 2;

  @media screen and (max-width: 768px) {
    padding: 20px 16px;
  }

  @media screen and (max-width: 320px) {
    height: 79px;
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
  position: relative;

  p {
    color: #fff;
  }
`

export const CartView = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;

  p {
    font-size: 1.5rem;
  }
`

export const Modal = styled.div`
  background-color: #fff;
  position: absolute;
  top: 75px;
  right: 0;
  width: 95%;
  margin: 0 8px;
  max-width: 600px;
  color: #000;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: 57px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    transform: rotate(45deg);

    @media screen and (max-width: 768px) {
      right: 44px;
    }

    opacity: 0;
    transform: translateY(20px);
    animation: dropdowm 0.3s forwards ease-in-out;

    @keyframes dropdowm {
      to {
        opacity: 1;
        transform: initial;
        transform: rotate(45deg);
      }
    }
  }

  h1 {
    font-size: 20px;
    margin-bottom: 3rem;
    margin-top: 1rem;
    text-transform: uppercase;
  }

  @media screen and (max-width: 320px) {
    top: 71px;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .buy-now-link {
    text-decoration: none;
    text-align: center;
    background-color: #222222;
    margin: 1rem 0;
    align-self: end;
    color: #fff;
    padding: 1rem 2rem;
    letter-spacing: 0.1rem;
    border-radius: 4px;

    &:hover,
    &:focus {
      opacity: 0.8;
    }

    @media screen and (max-width: 400px) {
      width: 100%;
    }
  }
`

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;

  h1 {
    font-weight: 300;
    letter-spacing: 0.4rem;
    margin: 0;

    @media screen and (max-width: 380px) {
      letter-spacing: 0.2rem;
      font-size: 1rem;
    }
  }
`
