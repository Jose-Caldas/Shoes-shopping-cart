import styled from 'styled-components'

export const Container = styled.div`
  p {
    font-weight: 300;
    font-size: 1rem;
    color: #444;

    @media screen and (max-width: 340px) {
      font-size: 12px;
    }
  }

  ul {
    margin-top: 1rem;
    margin-left: 1rem;
  }

  li {
    font-size: 1rem;
    font-weight: 300;

    @media screen and (max-width: 340px) {
      font-size: 12px;
    }
  }
`
