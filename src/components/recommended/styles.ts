import styled from 'styled-components'

export const Container = styled.section`
  padding: 20px;
`

export const RecommendedFlex = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20rem;
  gap: 10px;
  margin-top: 40px;

  @media screen and (max-width: 1044px) {
    margin-left: 0;
    justify-content: center;
  }

  button {
    &:hover,
    &:focus {
      background-color: #222;
      color: #fff;
    }

    &:nth-child(7) {
      background-color: #4c956c;
      color: #fff;

      display: none;

      @media screen and (max-width: 1044px) {
        display: flex;
      }
    }
  }
`
