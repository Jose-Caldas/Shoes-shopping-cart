import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 1rem;

  p {
    border-top: 2px solid #eee;
    padding-top: 1rem;
    font-weight: 300;
    font-size: 1rem;
    color: #444444;

    @media screen and (max-width: 340px) {
      font-size: 12px;
    }
  }

  ul {
    margin-top: 1rem;
    list-style: none;
  }

  li {
    font-size: 1rem;
    font-weight: 300;
    color: #444444;

    @media screen and (max-width: 340px) {
      font-size: 12px;
    }
  }
`
