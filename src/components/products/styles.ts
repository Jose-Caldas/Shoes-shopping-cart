import styled from 'styled-components'

export const Container = styled.div``

export const Products = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20rem;
  margin-top: 2rem;

  opacity: 0;
  transform: translateX(-20px);
  animation: animationLeft 0.3s forwards ease-in-out;

  @keyframes animationLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  @media screen and (max-width: 1044px) {
    margin-left: 0;
    justify-content: center;
    width: 100%;
  }
`
