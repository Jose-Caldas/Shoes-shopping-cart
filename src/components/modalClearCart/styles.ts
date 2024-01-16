import styled from 'styled-components'

export const ModalContainer = styled.section`
  background-color: #fff;
  padding: 2rem 1.5rem;
  border-radius: 4px;
  max-width: 400px;

  opacity: 0;
  transform: translateX(-20px);
  animation: animationLeft 0.3s forwards ease-in-out;

  @keyframes animationLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  @media screen and (max-width: 410px) {
    padding: 2rem 1rem;
  }

  h1 {
    font-weight: 400;
    letter-spacing: 0.2rem;
    margin-bottom: 1rem;
    font-size: 2rem;

    @media screen and (max-width: 410px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: #444444;
    font-weight: 300;
    margin-bottom: 2rem;
    line-height: 1.8rem;
    font-size: 1.5rem;

    @media screen and (max-width: 410px) {
      font-size: 1rem;
      line-height: 1.4rem;
    }
  }

  button {
    border: none;
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.25rem;
    width: 100px;

    @media screen and (max-width: 410px) {
      font-size: 1rem;
    }
  }

  .clear-btn {
    color: #fff;
    background-color: #e63946;
    margin-right: 0.5rem;

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }

  .cancel-btn {
    color: #444444;
    background-color: transparent;

    &:hover,
    &:focus {
      background-color: #eee;
    }
  }
`
