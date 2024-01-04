import styled from 'styled-components'

export const Container = styled.div``

export const Products = styled.section`
  max-width: 1600px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 20rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    margin-left: 2rem;
    justify-content: center;

    margin-left: 0;
  }
`
