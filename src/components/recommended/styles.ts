import styled from 'styled-components'

export const RecommendedTitle = styled.h2`
  margin-left: 20rem;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 20px;
  padding-left: 20px;

  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
`

export const RecommendedFlex = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20rem;
  padding-left: 20px;
  gap: 10px;

  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
`
