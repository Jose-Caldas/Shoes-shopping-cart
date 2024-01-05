import styled from 'styled-components'

export const Container = styled.div``

export const Products = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20rem;
  margin-top: 2rem;

  max-width: 80%;

  @media screen and (max-width: 768px) {
    margin-left: 2rem;
    justify-content: center;
    width: 100%;

    margin-left: 3rem;
  }
`
