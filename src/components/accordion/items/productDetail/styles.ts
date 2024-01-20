import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 1rem;
  ul {
    list-style: none;
    padding-top: 1rem;
    border-top: 2px solid #eee;
  }

  li {
    font-weight: 300;
    color: #444444;
    @media screen and (max-width: 340px) {
      font-size: 12px;
    }
  }
`
