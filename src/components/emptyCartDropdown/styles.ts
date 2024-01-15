import styled from 'styled-components'

export const EmptyCartContainer = styled.div`
  flex-direction: column;
  padding: 1rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;

  h1 {
    font-weight: 300;
    letter-spacing: 0.4rem;
    margin: 0;

    @media screen and (max-width: 380px) {
      letter-spacing: 0.2rem;
      font-size: 1rem;
    }
  }
`

export const Message = styled.p`
  font-size: 20px;
  text-align: center;
  color: #495057;
  font-weight: 300;

  @media screen and (max-width: 380px) {
    font-size: 16px;
  }

  @media screen and (max-width: 290px) {
    font-size: 12px;
  }
`

export const ShoppingCartIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: #eee;
    font-size: 150px;

    @media screen and (max-width: 600px) {
    }
  }
`
