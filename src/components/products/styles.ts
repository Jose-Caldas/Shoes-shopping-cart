import styled from 'styled-components'

export const Container = styled.div``

export const Products = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20rem;
  margin-top: 2rem;

  @media screen and (max-width: 1044px) {
    margin-left: 0;
    justify-content: center;
    width: 100%;
  }
`
