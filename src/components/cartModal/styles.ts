import styled from 'styled-components'

export const CartModalContainer = styled.section`
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #eee;
`
export const CartModalContent = styled.div`
  display: flex;
  gap: 1rem;
`

export const ImageBox = styled.div`
  max-width: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  border-radius: 10px;

  @media screen and (max-width: 500px) {
    width: 100px;
  }

  img {
    width: 100%;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export const DescriptionHeader = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-between;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 12px;
    font-weight: 300;
  }

  h3 {
    font-size: 14px;
    font-weight: bold;
  }
`
