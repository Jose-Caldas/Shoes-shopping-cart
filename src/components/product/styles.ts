import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`

export const ProductTitle = styled.h1`
  font-weight: 400;
  letter-spacing: 0.2rem;
  text-align: center;
  margin-top: 2rem;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`

export const ProductDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
`

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

export const CartView = styled.button`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;

  p {
    color: #fff;
    font-size: 1.5rem;
  }
`

export const ProductCard = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem 0;
  gap: 3rem;

  h2 {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 350px;
`

export const ImageBox = styled.div`
  width: 200px;

  img {
    width: 100%;
  }
`

export const Reviews = styled.div`
  .rating-star {
    color: #d5ab55;
  }
`

export const SizesContainer = styled.div`
  border: 2px solid #eee;
  padding: 1rem;
  border-radius: 4px;

  h1 {
    font-size: 1rem;
    color: #9c9492;
    font-weight: 300;
    letter-spacing: 1.15px;
  }
`
export const SizesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardPrice = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  del {
    font-size: 12px;
  }

  span {
    font-weight: 600;
    font-size: 13px;
    color: red;
  }
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 2px solid #eee;
  padding: 1rem;
  min-height: 350px;

  h3 {
    letter-spacing: 1.15px;
  }

  h4 {
    color: #000000;
    font-size: 18px;

    span {
      font-size: 14px;
      color: #444;
      font-weight: 300;
      letter-spacing: 1.15px;
      margin-left: 8px;
    }
  }
`

export const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  color: #9c9492;

  p {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 300;
    color: #444;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

export const CustomButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  background: transparent;
  border: none;
  border: 0.6px solid #eee;
  border-radius: 5px;
  color: #323232;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1.15px;

  transition: all 0.3s ease-out;

  &:hover {
    background-color: #222222;
    color: #fff;
  }
`
export const CustomLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px 20px;
  background-color: #4c956c;
  opacity: 1;
  border: none;
  border: 0.6px solid #eee;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1.15px;

  transition: all 0.3s ease-out;

  &:hover {
    opacity: 0.8;
    color: #fff;
  }
`

export const ReturnShopping = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  text-decoration: none;
  color: #444;
  letter-spacing: 1.15px;
`

export const Modal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 1rem;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 40px 70px;
  border-radius: 4px;
  gap: 1rem;

  @media screen and (max-width: 420px) {
    padding: 30px;
  }

  p {
    font-size: 20px;
    text-transform: uppercase;
    width: 100%;
    max-width: 250px;
    text-align: center;
    letter-spacing: 0.2rem;
    line-height: 1.5;
    margin-bottom: 8px;
  }

  .continue {
    border: 2px solid #eee;
    padding: 1rem 0.5rem;
    color: #222222;
    text-decoration: none;
    border-radius: 4px;
    font-size: 14px;
    width: 100%;
    max-width: 250px;
    text-align: center;
    transition: all 0.3s ease-out;

    &:hover {
      background-color: #222222;
      color: #fff;
    }
  }

  .go-to {
    border: 2px solid #eee;
    padding: 1rem 0.5rem;
    background-color: #222222;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    font-size: 14px;
    width: 100%;
    max-width: 250px;
    text-align: center;
    transition: all 0.3s ease-out;

    &:hover {
      opacity: 0.8;
    }
  }

  svg {
    margin-bottom: 1rem;
  }
`

export const CartModal = styled.div`
  background-color: #fff;
  position: absolute;
  top: 75px;
  right: 0;
  z-index: 1;
  width: 95%;
  margin: 0 8px;
  max-width: 600px;
  color: #000;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: 57px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    transform: rotate(45deg);

    opacity: 0;
    transform: translateY(20px);
    animation: dropdowm 0.3s forwards ease-in-out;
  }

  @keyframes dropdowm {
    to {
      opacity: 1;
      transform: initial;
      transform: rotate(45deg);
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

export const EmptyCart = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  p {
    font-size: 20px;
  }
`

export const Payments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  max-width: 1200px;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  @media screen and (max-width: 390px) {
    flex-direction: column;
  }
`

export const Cards = styled.div`
  display: flex;
  gap: 0.5rem;
`
