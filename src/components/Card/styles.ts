import styled from 'styled-components'

export const CardContainer = styled.section`
  margin: 20px;
  border: 2px solid #ededed;
  padding: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .card-img {
    width: 13rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    gap: 2rem;
  }

  @media screen and (max-width: 510px) {
    width: 100%;
    flex-direction: column;
    gap: 0;
  }
`

export const CardDetails = styled.div``

export const CardTitle = styled.h3`
  margin-bottom: 1rem;
`
export const CardReviews = styled.span`
  margin-bottom: 1rem;
  display: flex;

  .rating-star {
    color: #d5ab55;
  }

  .total-reviews {
    font-size: 0.9rem;
    margin-left: 10px;
  }
`

export const CardPrice = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  del {
    font-size: 15px;
  }

  span {
    margin-left: 10px;
    font-weight: 600;
    /* color: green; */
  }
`

export const Bag = styled.div`
  .bag-icon {
    color: #535353;
  }
`
